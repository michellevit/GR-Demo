require "application_system_test_case"

class ProductsTest < ApplicationSystemTestCase
  setup do
    @product = products(:one)
  end

  test "visiting the index" do
    visit products_url
    assert_selector "h1", text: "Products"
  end

  test "should create product" do
    visit products_url
    click_on "New product"

    fill_in "Average rating", with: @product.average_rating
    fill_in "Description", with: @product.description
    fill_in "Download count", with: @product.download_count
    check "Flex price" if @product.flex_price
    fill_in "Price", with: @product.price
    fill_in "Product name", with: @product.product_name
    fill_in "Ratings count", with: @product.ratings_count
    fill_in "User", with: @product.user
    click_on "Create Product"

    assert_text "Product was successfully created"
    click_on "Back"
  end

  test "should update Product" do
    visit product_url(@product)
    click_on "Edit this product", match: :first

    fill_in "Average rating", with: @product.average_rating
    fill_in "Description", with: @product.description
    fill_in "Download count", with: @product.download_count
    check "Flex price" if @product.flex_price
    fill_in "Price", with: @product.price
    fill_in "Product name", with: @product.product_name
    fill_in "Ratings count", with: @product.ratings_count
    fill_in "User", with: @product.user
    click_on "Update Product"

    assert_text "Product was successfully updated"
    click_on "Back"
  end

  test "should destroy Product" do
    visit product_url(@product)
    click_on "Destroy this product", match: :first

    assert_text "Product was successfully destroyed"
  end
end
