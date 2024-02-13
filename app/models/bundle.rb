class Bundle < ApplicationRecord
    belongs_to :user
    has_many :bundle_products, dependent: :destroy
    has_many :products, through: :bundle_products
end
  