require "test_helper"

class DiceControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get dice_show_url
    assert_response :success
  end
end
