require 'test_helper'

class RecipesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @recipe = recipes(:one)
  end

  test "should get index" do
    get recipes_url, as: :json
    assert_response :success
  end

  test "should create recipe" do
    assert_difference('Recipe.count') do
      post recipes_url, params: { recipe: { how-to-make: @recipe.how-to-make, image: @recipe.image, ingredient: @recipe.ingredient, name: @recipe.name, tag: @recipe.tag, type: @recipe.type, user_id: @recipe.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show recipe" do
    get recipe_url(@recipe), as: :json
    assert_response :success
  end

  test "should update recipe" do
    patch recipe_url(@recipe), params: { recipe: { how-to-make: @recipe.how-to-make, image: @recipe.image, ingredient: @recipe.ingredient, name: @recipe.name, tag: @recipe.tag, type: @recipe.type, user_id: @recipe.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy recipe" do
    assert_difference('Recipe.count', -1) do
      delete recipe_url(@recipe), as: :json
    end

    assert_response 204
  end
end
