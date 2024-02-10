class ApplicationController < ActionController::Base
    def react_app
        render file: Rails.root.join('public', 'build', 'index.html'), layout: false
    end
  end