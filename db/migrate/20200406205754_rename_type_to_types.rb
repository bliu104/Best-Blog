class RenameTypeToTypes < ActiveRecord::Migration[6.0]
  def change
    rename_column :recipes, :type, :catagories
  end
end
