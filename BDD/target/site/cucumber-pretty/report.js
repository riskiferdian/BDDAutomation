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
  "duration": 10554623000,
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
  "name": "System display a page where item price is same with item total",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "System display the item total price after tax is same with total purchase",
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
  "duration": 376310541,
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
  "duration": 3007270208,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 145334625,
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
  "duration": 3296334458,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.choiceProduct()"
});
formatter.result({
  "duration": 3352919250,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.addChartButton()"
});
formatter.result({
  "duration": 118307750,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.verifyChartPage()"
});
formatter.result({
  "duration": 106237458,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.removeItem()"
});
formatter.result({
  "duration": 3038899917,
  "status": "passed"
});
formatter.match({
  "location": "CartPageSteps.clickCheckoutButton()"
});
formatter.result({
  "duration": 94546583,
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
  "duration": 6240325417,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutOverviewSteps.verifyPrice()"
});
formatter.result({
  "duration": 94309625,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutOverviewSteps.verifyTotal()"
});
formatter.result({
  "duration": 56061959,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutOverviewSteps.clickFinishButton()"
});
formatter.result({
  "duration": 583747959,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutOverviewSteps.verifyThankOrder()"
});
formatter.result({
  "duration": 3036600917,
  "status": "passed"
});
formatter.after({
  "duration": 139089458,
  "status": "passed"
});
});