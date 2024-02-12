Rails.application.routes.draw do
  root 'application#react_app'
  namespace :api do
    resources :products
  end
  # Health check route
  get '/up', to: 'rails/health#show', as: :rails_health_check
end