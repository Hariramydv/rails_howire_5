class Book < ApplicationRecord
  validates :title, :price, presence: true
end
