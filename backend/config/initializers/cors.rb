
Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'localhost:3000'
      resource '*',
        headers: :any,
        methods: [:get, :post, :patch, :put, :delete, :options, :head]
    end
  end