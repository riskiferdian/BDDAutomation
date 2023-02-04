package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckOutOverview {
    public static WebDriver webDriver;
    public CheckOutOverview(WebDriver webDriver){
        PageFactory.initElements(webDriver, this);
        this.webDriver = webDriver;
    }

    @FindBy(xpath = "//span[@class='title']")
    private WebElement verifyOverview;


    @FindBy(xpath = "//div[@class='inventory_item_price']")
    private WebElement priceActual;
    public String setActual(){
        String priceAct = "Item total: " + priceActual.getText();
        return priceAct;
    }

    @FindBy(xpath = "//div[@class='summary_subtotal_label']")
    private WebElement itemTotal;
    public String setItemTotal(){
       return itemTotal.getText();
    }
    public Float itemTotalFloat(){
        String a = itemTotal.getText();
        String b = a.replaceAll("[^0-9.]", "");
        float c = Float.parseFloat(b);
        return c;
    }

    @FindBy(xpath = "//div[@class='summary_total_label']")
    private WebElement lastTotal;
    public String setLastTotal(){
        String a = lastTotal.getText();
        String b = a.replaceAll("[^0-9.]", "");
        return b;
    }

    @FindBy(xpath = "//div[@class='summary_tax_label']")
    private WebElement tax;
    public Float setTax(){
        String a = tax.getText();
        String b = a.replaceAll("[^0-9.]", "");
        float c = Float.parseFloat(b);
        return c;
    }

    public String setTaxAndItem(){
        float a = itemTotalFloat();
        float b = setTax();
        float c = a+b;
        String d = Float.toString(c);
        return d;
        }

    @FindBy(xpath = "//button[@id='finish']")
    private WebElement finishButton;
    public void clickFinishButton(){
        finishButton.click();
    }

    @FindBy(xpath = "//h2[@class='complete-header']")
    private WebElement thankOrder;
    public boolean verifyThankOrder(){
        return thankOrder.isDisplayed();
    }
}
