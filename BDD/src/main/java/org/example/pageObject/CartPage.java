package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CartPage {
    public static WebDriver webDriver;
    public CartPage(WebDriver webDriver) {
        PageFactory.initElements(webDriver, this);
        this.webDriver = webDriver;
    }

    @FindBy(xpath = "//button[@id='remove-test.allthethings()-t-shirt-(red)']")
    private WebElement remove1;

    public void removeItem(){
        remove1.click();
    }

    @FindBy(xpath = "//span[@class='title']")
    private WebElement verifyCartPage;

    public boolean setVerifyCartPage(){
       return verifyCartPage.isDisplayed();
    }

    @FindBy(xpath = "//button[@id='checkout']")
    private WebElement checkout;

    public void setCheckout(){
        checkout.click();
    }

}
