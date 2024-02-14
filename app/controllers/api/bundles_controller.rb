module Api
    class BundlesController < ApplicationController
      
      # GET /api/bundles or /api/bundles.json
      def index
        @bundles = Bundle.includes(:user, :products).order(:id)
        respond_to do |format|
          format.html { render layout: 'api' }
          format.json {
            render json: @bundles.as_json(include: [:user, products: {only: [:id, :product_name, :price, :description]}])
          }
        end
      end

      # GET /api/bundles/1 or /api/bundles/1.json
      def show
        @bundle = Bundle.includes(:user, :products).find(params[:id])
        render json: @bundle.as_json(include: [:user, products: {only: [:id, :product_name, :price, :description]}])
        end
      rescue ActiveRecord::RecordNotFound
        render json: { error: "Bundle not found" }, status: :not_found
      end
    end
  end