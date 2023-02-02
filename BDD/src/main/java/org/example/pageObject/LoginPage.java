package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public static WebDriver webDriver;
    public LoginPage(WebDriver webDriver){
        PageFactory.initElements(webDriver, this);
        this.webDriver = webDriver;
    }

    @FindBy(xpath = "//input[@id='user-name']")
    private WebElement userName;
    public void setUserName(String setUserName){
        userName.sendKeys(setUserName);
    }

    public boolean verifyLoginPage(){
        userName.isDisplayed();
        return true;
    }

    @FindBy(xpath = "//input[@id='password']")
    private WebElement password;
    public void setPassword(String pass){
        password.sendKeys(pass);
    }

    @FindBy(xpath = "//input[@id='login-button']")
    private WebElement buttonLogin;
    public void clickLogin(){
        buttonLogin.click();
    }

    @FindBy(xpath = "//span[@class='title']")
    private WebElement verifyLanding;
    public boolean verifyLandigPage(){
        verifyLanding.isDisplayed();
        return true;
    }

    @FindBy(xpath = "//h3")
    private WebElement errorText;
    public String verifyErrorText(){
        return errorText.getText();
    }
}
