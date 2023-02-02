package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en_scouse.An;
import org.example.pageObject.LandingPage;
import org.example.pageObject.LoginPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class PurchaseSteps {
    private WebDriver webDriver;

    public PurchaseSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Then("User already on landing page")
    public void verifyLandingPage(){
        LandingPage landingPage = new LandingPage(webDriver);
        Assert.assertTrue(landingPage.verifyLandigPage());
    }
    @And("User sort product list by \"(.*)\"")
    public void sortProductValue(String sort) throws InterruptedException {
        LandingPage landingPage = new LandingPage(webDriver);
        landingPage.sortProduct(sort);
        Thread.sleep(3000);
    }

    @And("User choice 2 product from the list")
    public void choiceProduct() throws InterruptedException {
        LandingPage landingPage = new LandingPage(webDriver);
        landingPage.clickBasket1();
        landingPage.clickBasket2();
        Thread.sleep(3000);
    }

    @And("User click chart button")
    public void addChartButton(){
        LandingPage landingPage = new LandingPage(webDriver);
        landingPage.addToChart();
    }

}

