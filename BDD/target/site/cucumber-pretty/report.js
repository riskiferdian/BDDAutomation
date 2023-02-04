$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Sales.feature");
formatter.feature({
  "line": 2,
  "name": "Sales flow",
  "description": "description",
  "id": "sales-flow",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sales"
    }
  ]
});
formatter.before({
  "duration": 10333016792,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User make a purchase with 2 item",
  "description": "",
  "id": "sales-flow;user-make-a-purchase-with-2-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as pass",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User sort product list by \"Name (Z to A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User choice 2 product from the list",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click chart button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User already on Chart Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User remove the last item",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User input user \"riski\" as first , \"ferdian\" as last, \"68131\" as zip on checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click continue button on check out page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "System display a page where item price is same with item total",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "System display the item total price after tax is same with total purchase",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click finish button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "System display message thank you for your order",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "duration": 381407042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 2903812542,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 1768554041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 27
    }
  ],
  "location": "PurchaseSteps.sortProductValue(String)"
});
formatter.result({
  "duration": 1724591042,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.choiceProduct()"
});
formatter.result({
  "duration": 2286508667,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.addChartButton()"
});
formatter.result({
  "duration": 114926458,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.verifyChartPage()"
});
formatter.result({
  "duration": 3105777291,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.removeItem()"
});
formatter.result({
  "duration": 3067432084,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.clickCheckoutButton()"
});
formatter.result({
  "duration": 108327292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "riski",
      "offset": 17
    },
    {
      "val": "ferdian",
      "offset": 36
    },
    {
      "val": "68131",
      "offset": 55
    }
  ],
  "location": "CheckOutPageSteps.inputData(String,String,String)"
});
formatter.result({
  "duration": 3934736375,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageSteps.clickContinue()"
});
formatter.result({
  "duration": 149904125,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutOverviewSteps.verifyPrice()"
});
formatter.result({
  "duration": 62034792,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutOverviewSteps.verifyTotal()"
});
formatter.result({
  "duration": 3063155709,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutOverviewSteps.clickFinishButton()"
});
formatter.result({
  "duration": 100400209,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutOverviewSteps.verifyThankOrder()"
});
formatter.result({
  "duration": 2405959625,
  "status": "passed"
});
formatter.after({
  "duration": 125250167,
  "status": "passed"
});
});