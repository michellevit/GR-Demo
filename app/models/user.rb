class User < ApplicationRecord
    validates :highlight_color, :background_color, format: { with: /\A#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\z/, message: "must be a hex color" }
    has_many :products, dependent: :destroy
end