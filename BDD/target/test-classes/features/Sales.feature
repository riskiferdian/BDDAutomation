@Sales
  Feature: Sales flow
    description
  
  Scenario: User make a purchase with 2 item
    Given User open the website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as pass
    Then User already on landing page
    And User sort product list by "Name (Z to A)"
    And User choice 2 product from the list
    And User click chart button
    Then User already on Chart Page
    And User remove the last item
    And User click checkout button
    And User input user "percoba" as first , "hanua" as last, "134" as zip on checkout page
    Then System display a page where item price is same with total price
    And the total price is same
    And User click finish button
    Then System display message thank you for your order

