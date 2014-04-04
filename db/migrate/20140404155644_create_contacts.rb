class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :about1
      t.string :about2
      t.string :thanks
      t.timestamps
    end
  end
end
