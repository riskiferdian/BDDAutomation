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
    And User input user "riski" as first , "ferdian" as last, "68131" as zip on checkout page
    And User click continue button on check out page
    Then System display a page where item price is same with item total
    And System display the item total price after tax is same with total purchase
    And User click finish button
    Then System display message thank you for your order

