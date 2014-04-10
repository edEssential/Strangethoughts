class AddImageToHeros < ActiveRecord::Migration
  def self.up
    add_attachment :heros, :image
  end

  def self.down
    remove_attachment :heros, :image
  end
end
