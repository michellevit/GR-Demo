class ApplicationController < ActionController::Base
    def react_app
        render file: Rails.root.join('public', 'index.html')
    end
  end