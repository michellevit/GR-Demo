Rails.application.routes.draw do
  namespace :api do
    resources :products do
      post 'like', on: :member
    end
    resources :users
    get '/', to: 'home#index', as: 'home'
  end
  root 'application#react_app'
  # Health check route
  get '/up', to: 'rails/health#show', as: :rails_health_check
  # Catch-all route for React Router (must be last route in this file)
  get '*path', to: 'application#react_app'
end