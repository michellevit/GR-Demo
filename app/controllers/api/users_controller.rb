module Api
    class UsersController < ApplicationController
      
      before_action :set_user, only: %i[ show edit update destroy ]
      # GET /api/users or /api/users.json
      def index
        @users = User.all.order(:id)
        respond_to do |format|
          format.html { render layout: 'api' }
          format.json { render json: @users }
        end
      end  

      # GET /api/users/1 or /api/users/1.json
      def show
        @user = User.find(params[:id])
        respond_to do |format|
          format.html 
          format.json { render json: @user, status: :ok } 
        end
      rescue ActiveRecord::RecordNotFound
        render json: { error: "User not found" }, status: :not_found
      end
    
      def find_by_email
        user = User.find_by(email: params[:email])
        if user
          render json: user, status: :ok
        else
          render json: { error: "User not found" }, status: :not_found
        end
      end

      private

    def set_user
      @user = User.find(params[:id])
      render json: @user, status: :ok
    rescue ActiveRecord::RecordNotFound
      render json: { error: "User not found" }, status: :not_found
    end

    end
  end
  