class CreateChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.string :title, null: false
      t.timestamps
    end
  end
end
