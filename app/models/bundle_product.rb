class BundleProduct < ApplicationRecord
  belongs_to :bundle
  belongs_to :product
end