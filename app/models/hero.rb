class Hero < ActiveRecord::Base
  attr_accessible :slide_title, :slide_content, :image
  
  has_attached_file :image, styles: {
      thumb: '100x100>',
      square: '200x200#',
      medium: '1920x1080>'
  }
  
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
