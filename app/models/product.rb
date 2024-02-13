class Product < ApplicationRecord
  t.string "user"
  belongs_to :user
end