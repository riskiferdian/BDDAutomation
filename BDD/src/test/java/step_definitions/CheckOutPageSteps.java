package step_definitions;

import cucumber.api.java.en.And;
import net.masterthought.cucumber.json.Hook;
import org.example.pageObject.CheckOutPage;
import org.openqa.selenium.WebDriver;

public class CheckOutPageSteps {
    private WebDriver webDriver;
    public CheckOutPageSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }
    @And("User input user \"(.*)\" as first , \"(.*)\" as last, \"(.*)\" as zip on checkout page")
    public void inputData(String first, String last, String zip) throws InterruptedException {
        CheckOutPage checkOutPage = new CheckOutPage(webDriver);
        checkOutPage.inputFirstName(first);
        checkOutPage.inputLastName(last);
        checkOutPage.inputZipCode(zip);
        checkOutPage.setClickButton();
        Thread.sleep(5000);
    }
}
