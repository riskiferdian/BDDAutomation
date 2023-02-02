package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class  LandingPage {
    public static WebDriver webDriver;

    public LandingPage(WebDriver webDriver) {
        PageFactory.initElements(webDriver, this);
        this.webDriver = webDriver;
    }

    @FindBy(xpath = "//span[@class='title']")
    private WebElement verifyLanding;

    public boolean verifyLandigPage(){
        verifyLanding.isDisplayed();
        return true;
    }
}
