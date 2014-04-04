class AddImageToStartups < ActiveRecord::Migration
  def self.up
    add_attachment :startups, :image
  end

  def self.down
    remove_attachment :startups, :image
  end
end