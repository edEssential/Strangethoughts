class CreateStartupheaders < ActiveRecord::Migration
  def change
    create_table :startupheaders do |t|
      t.string :title
      t.text :strapline, :limit => nil
      t.timestamps
    end
  end
end
