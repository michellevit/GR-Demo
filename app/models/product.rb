class Product < ApplicationRecord
    belongs_to :user
    has_many :bundle_products, dependent: :destroy
    has_many :bundles, through: :bundle_products
end