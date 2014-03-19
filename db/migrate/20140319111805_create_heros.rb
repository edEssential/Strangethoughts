class CreateHeros < ActiveRecord::Migration
  def change
    create_table :heros do |t|
      t.string :slide_title
      t.text :slide_content, :limit => nil
      t.timestamps
    end
  end
end
