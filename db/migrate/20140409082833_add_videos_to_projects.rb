class AddVideosToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :video_embed, :string
  end
end