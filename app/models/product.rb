class Product < ApplicationRecord
    serialize :image_urls, Array
  end