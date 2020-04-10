class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :tag
      t.string :type
      t.string :ingredient
      t.string :how_to_make
      t.string :image
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
