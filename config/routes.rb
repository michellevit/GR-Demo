Rails.application.routes.draw do
  namespace :api do
    resources :products do
      post 'like', on: :member
      get 'bundles', on: :member
    end
    resources :users do
      collection do
        get 'find_by_email', to: 'users#find_by_email' 
      end
    end
    resources :bundles
    get '/', to: 'home#index', as: 'home'
  end
  root 'application#react_app'
  # Health check route
  get '/up', to: 'rails/health#show', as: :rails_health_check
  # Catch-all route for React Router (must be last route in this file)
  get '*path', to: 'application#react_app'
end