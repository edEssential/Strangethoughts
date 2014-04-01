class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :challenge, :limit => nil
      t.text :solution, :limit => nil
      t.text :result, :limit => nil
      t.timestamps
    end
  end
end
