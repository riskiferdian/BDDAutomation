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
  "duration": 10945771375,
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
  "name": "User input user \"percoba\" as first , \"hanua\" as last, \"134\" as zip on checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "System display a page where item price is same with total price",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "the total price is same",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click finish button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "System display message thank you for your order",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLogin()"
});
formatter.result({
  "duration": 257809083,
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
  "duration": 3081159125,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 169010000,
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
  "duration": 3255065625,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.choiceProduct()"
});
formatter.result({
  "duration": 3265318042,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.addChartButton()"
});
formatter.result({
  "duration": 123999125,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.verifyChartPage()"
});
formatter.result({
  "duration": 121902041,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.removeItem()"
});
formatter.result({
  "duration": 3060444375,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.clickCheckoutButton()"
});
formatter.result({
  "duration": 101560875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "percoba",
      "offset": 17
    },
    {
      "val": "hanua",
      "offset": 38
    },
    {
      "val": "134",
      "offset": 55
    }
  ],
  "location": "CheckOutPageSteps.inputData(String,String,String)"
});
formatter.result({
  "duration": 6134983792,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutOverviewSteps.verifyPrice()"
});
formatter.result({
  "duration": 95483500,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutOverviewSteps.verifyTotal()"
});
formatter.result({
  "duration": 61450583,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutOverviewSteps.clickFinishButton()"
});
formatter.result({
  "duration": 471207625,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutOverviewSteps.verifyThankOrder()"
});
formatter.result({
  "duration": 28365250,
  "status": "passed"
});
formatter.after({
  "duration": 120819167,
  "status": "passed"
});
});