package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.example.pageObject.CartPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class CartPageSteps {
    private WebDriver webDriver;
    public CartPageSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Then("User already on Chart Page")
    public void verifyChartPage(){
        CartPage cartPage = new CartPage(webDriver);
        Assert.assertTrue(cartPage.setVerifyCartPage());
    }

    @And("User click checkout button")
    public void clickCheckoutButton(){
        CartPage cartPage = new CartPage(webDriver);
        cartPage.setCheckout();
    }

    @And("User remove the last item")
    public void removeItem() throws InterruptedException {
        CartPage cartPage = new CartPage(webDriver);
        cartPage.removeItem();
        Thread.sleep(3000);
    }

}
