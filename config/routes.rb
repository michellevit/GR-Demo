Rails.application.routes.draw do
  namespace :api do
    resources :products
  end
  root 'application#react_app'
  # Health check route
  get '/up', to: 'rails/health#show', as: :rails_health_check
end