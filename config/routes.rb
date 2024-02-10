Rails.application.routes.draw do
  resources :products
  root 'application#react_app'
  get '/backend', to: 'home#index', as: 'backend'
  # Route for searching products
  get '/products/search', to: 'products#search', as: 'search_products'
  # Health check route
  get '/up', to: 'rails/health#show', as: :rails_health_check
end