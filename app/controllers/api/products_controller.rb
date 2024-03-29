module Api
  class ProductsController < ApplicationController
    before_action :set_product, only: %i[ show edit update destroy like ]
    

    # GET /products or /products.json
    def index
      @products = Product.includes(:user).order(:id)
      products_with_user = @products.as_json(include: { user: { only: [:name] } })
      respond_to do |format|
        format.html { render layout: 'api' }
        format.json { render json: products_with_user }
      end
    end


    # GET /products/1 or /products/1.json
    def show
      @product = Product.includes(:user).find(params[:id])
      product_with_user = @product.as_json(include: { user: { only: [:name] } })
      render json: product_with_user
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Product not found" }, status: :not_found
    end


    # GET /products/new
    def new
      @product = Product.new
    end


    # GET /products/1/edit
    def edit
    end


    # POST /products or /products.json
    def create
      @product = Product.new(product_params)
      respond_to do |format|
        if @product.save
          format.html { redirect_to product_url(@product), notice: "Product was successfully created." }
          format.json { render :show, status: :created, location: @product }
        else
          format.html { render :new, status: :unprocessable_entity }
          format.json { render json: @product.errors, status: :unprocessable_entity }
        end
      end
    end


    # PATCH/PUT /products/1 or /products/1.json
    def update
      respond_to do |format|
        if @product.update(product_params)
          format.html { redirect_to product_url(@product), notice: "Product was successfully updated." }
          format.json { render :show, status: :ok, location: @product }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @product.errors, status: :unprocessable_entity }
        end
      end
    end


    # DELETE /products/1 or /products/1.json
    def destroy
      @product.destroy!
      respond_to do |format|
        format.html { redirect_to products_url, notice: "Product was successfully destroyed." }
        format.json { head :no_content }
      end
    end

    def like
      if @product.nil?
        return render json: { error: "Product not found" }, status: :not_found
      end
      user = User.find_by(email: params[:user_email])
      if user.nil?
        return render json: { error: "User not found" }, status: :not_found
      end
      product_id = @product.id
    
      if params[:liked] == true
        # Add product_id to liked_products array only if it's not already included
        user.liked_products |= [product_id]
      elsif params[:liked] == false
        # Remove product_id from liked_products array
        user.liked_products.delete(product_id)
      else
        return render json: { error: "Unsupported request method" }, status: :unprocessable_entity
      end
    
      if user.save
        render json: { status: 'success', liked_products: user.liked_products }, status: :ok
      else
        render json: { status: 'error', message: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def bundles
      product = Product.find(params[:id])
      bundles = product.bundles.includes(products: :user)
      render json: bundles.as_json(include: {
        products: {
          only: [:id, :product_name, :price, :description, :flex_price, :average_rating, :ratings_count, :image_urls],
          include: {
            user: {
              only: [:name]
            }
          }
        }
      }, methods: [:discount_percentage])
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Product not found" }, status: :not_found
    end
    
    def search
      if params[:query].present?
        @products = Product.includes(:user).where("product_name ILIKE ? OR description ILIKE ?", "%#{params[:query]}%", "%#{params[:query]}%")
        products_with_user = @products.as_json(include: { user: { only: [:name] } })
        render json: products_with_user
      else
        @products = Product.includes(:user).all
        products_with_user = @products.as_json(include: { user: { only: [:name] } })
        render json: products_with_user
      end
    end
    

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.includes(:user).find_by(id: params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Product not found" }, status: :not_found
    end
    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:product_name, :user, :description, :price, :flex_price, :ratings_count, :average_rating, :download_count)
    end

    
  end
end
