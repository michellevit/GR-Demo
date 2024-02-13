module Api
    class BundlesController < ApplicationController
      
      # GET /api/bundles or /api/bundles.json
      def index
        @bundles = Bundle.all.order(:id)
        respond_to do |format|
          format.html { render layout: 'api' }
          format.json { render json: @bundles }
        end
      end  

      # GET /api/users/1 or /api/users/1.json
      def show
        @bundle = Bundle.find(params[:id])
        render json: @bundle, status: :ok
      rescue ActiveRecord::RecordNotFound
        render json: { error: "User not found" }, status: :not_found
      end
    
    end
  end
  