package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.example.pageObject.CheckOutOverview;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class CheckOutOverviewSteps {
    private WebDriver webDriver;
    public CheckOutOverviewSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Then("System display a page where item price is same with item total")
    public void verifyPrice(){
        CheckOutOverview checkOutOverview = new CheckOutOverview(webDriver);
        Assert.assertEquals(checkOutOverview.setItemPrice(),checkOutOverview.setItemTotal(),0);
    }

    @And("System display the item total price after tax is same with total purchase")
    public void verifyTotal(){
        CheckOutOverview checkOutOverview = new CheckOutOverview(webDriver);
        Assert.assertEquals(checkOutOverview.setItemTotal()+checkOutOverview.setTax(), checkOutOverview.setTotalPurchase(), 0);
    }

    @And("User click finish button")
    public void clickFinishButton(){
        CheckOutOverview checkOutOverview = new CheckOutOverview(webDriver);
        checkOutOverview.clickFinishButton();
    }

    @Then("System display message thank you for your order")
    public void verifyThankOrder() throws InterruptedException {
        CheckOutOverview checkOutOverview = new CheckOutOverview(webDriver);
        Assert.assertTrue(checkOutOverview.verifyThankOrder());
        Thread.sleep(3000);
    }

}
