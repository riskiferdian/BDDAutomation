package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.security.PublicKey;

public class CheckOutPage {
    public static WebDriver webDriver;
    public CheckOutPage(WebDriver webDriver){
        PageFactory.initElements(webDriver, this);
        this.webDriver = webDriver;
    }

    @FindBy(xpath = "//span[@class='title']")
    private WebElement verifyCheckout;

    public boolean setVerifyCheckout(){
        return verifyCheckout.isDisplayed();
    }

    @FindBy(xpath = "//input[@id='first-name']")
    private WebElement firstName;
    public void inputFirstName(String setFirstName){
        firstName.sendKeys(setFirstName);
    }

    @FindBy(xpath = "//input[@id='last-name']")
    private WebElement lastName;
    public void inputLastName(String setLastName){
        lastName.sendKeys(setLastName);
    }

    @FindBy(xpath = "//input[@id='postal-code']")
    private WebElement zipCode;
    public void inputZipCode(String setZipCode){
        zipCode.sendKeys(setZipCode);
    }

    @FindBy(xpath = "//input[@id='continue']")
    private WebElement clickButton;
    public void clickContinueButton(){
        clickButton.click();
    }

}
