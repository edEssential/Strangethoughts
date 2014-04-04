class CreateStartups < ActiveRecord::Migration
  def change
    create_table :startups do |t|
      t.string :title
      t.text :content, :limit => nil
      t.string :url
      t.timestamps
    end
  end
end
