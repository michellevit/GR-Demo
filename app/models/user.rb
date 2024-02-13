class User < ApplicationRecord
    has_many :products, dependent: :destroy
    has_many :bundles, dependent: :destroy
    validates :highlight_color, :background_color, format: { with: /\A#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\z/, message: "must be a hex color" }
end
