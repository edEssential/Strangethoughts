class Project < ActiveRecord::Base
  attr_accessible :title, :challenge, :solution, :result, :image, :video_embed
  
  has_attached_file :image, styles: {
      thumb: '100x100>',
      square: '200x200#',
      medium: '640x390>'
  }
    
  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
  validates_presence_of :title
  
  def next
    Project.where("projects.id > ?", self.id).order("projects.id ASC").limit(1)
  end
  
  def prev
    Project.where("projects.id < ?", self.id).order("projects.id DESC").limit(1)
  end

end