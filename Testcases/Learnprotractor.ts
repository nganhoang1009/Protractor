import { browser, by } from "protractor";
import { async } from "q";
//suite
describe("Learn protractor page", function(){
    //testcase
    it("should be navigated to HomePage when login with valid account", async function()
    {
        await browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile")
        await browser.manage().window().maximize()
        await browser.element(by.model("formData.name")).sendKeys("ngan")
        await browser.sleep(2000)
        await browser.element(by.model("formData.email")).sendKeys("ngan123@gmail.com")
        await browser.sleep(2000)
        await browser.element(by.xpath("//a[@class ='btn btn-block btn-info']")).click()
        await browser.sleep(2000)
        // await browser.element(by.xpath("//input[@ng-model='formData.type'and @value='xbox']")).click()
        await browser.element(by.xpath("//input[@ng-model='formData.type'and @value='ps']")).click()
        await browser.sleep(2000)
        await browser.element(by.xpath("//a[@class='btn btn-block btn-info']")).click()
        await browser.sleep(2000)
        await browser.element(by.xpath("//button[@class='btn btn-danger']")).click()
        await browser.switchTo().alert().accept()
        // await browser.element(by.xpath("//td[text()='ngangaa123']/following-sibling::td/button")).click()
        //await browser.element(by.xpath(""))
        await browser.sleep(5000)
    })

})

