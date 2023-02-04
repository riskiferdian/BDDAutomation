package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

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

    @FindBy(xpath = "//select[@class='product_sort_container']")
    private WebElement selectContainer;

    public void sortProduct(String sort){
        Select a = new Select(selectContainer);
        a.selectByVisibleText(sort);
    }

    @FindBy(xpath = "//button[@id='add-to-cart-sauce-labs-onesie']")
    private WebElement basket1;
    public void clickBasket1(){
        basket1.click();
    }

    @FindBy(xpath = "//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")
    private WebElement basket2;
    public void clickBasket2(){
        basket2.click();
    }

    @FindBy(xpath = "//a[@class='shopping_cart_link']")
    private  WebElement keranjang;

    public void addToChart(){
        keranjang.click();
    }

}
