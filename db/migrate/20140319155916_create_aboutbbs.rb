class CreateAboutbbs < ActiveRecord::Migration
  def change
    create_table :aboutbbs do |t|
      t.string :title
      t.text :content, :limit => nil
      t.timestamps
    end
  end
end
