class Project < ActiveRecord::Base
  attr_accessible :title, :challenge, :solution, :result, :image
  
  has_attached_file :image, styles: {
      thumb: '100x100>',
      square: '200x200#',
      medium: '800x600>'
  }
    
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  validates_presence_of :title

end