@Sales
  Feature: Sales flow
    description
  
  Scenario: User make a purchase with 2 item
    Given User open the website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as pass
    Then User already on landing page
    And User sort product list by "Name (Z to A)"