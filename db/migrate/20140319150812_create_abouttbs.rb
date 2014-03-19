class CreateAbouttbs < ActiveRecord::Migration
  def change
    create_table :abouttbs do |t|
      t.string :title
      t.text :content, :limit => nil
      t.timestamps
    end
  end
end
