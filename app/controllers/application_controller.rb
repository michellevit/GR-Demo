class ApplicationController < ActionController::Base
    def react_app
      render file: 'public/build/static/index.html'
    end
  end