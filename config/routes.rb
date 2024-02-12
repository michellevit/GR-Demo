Rails.application.routes.draw do
  resources :products
  root 'application#react_app'
  # Health check route
  get '/up', to: 'rails/health#show', as: :rails_health_check
end