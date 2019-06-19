import {
    browser, by
} from 'protractor'
//suite
describe("Angular page ", function ()
{
    //testcase
    it("should be navigated to Angular when login with valid account", async function(){
    await browser.get("http://www.way2automation.com/angularjs-protractor/calc/")
    await browser.manage().window().maximize()
    await browser.element(by.model("first")).sendKeys("9")
    await browser.element(by.xpath("//option[@value='DIVISION']")).click()
    await browser.element(by.model("second")).sendKeys("7")
    await browser.sleep(2000)
    await browser.element(by.id("gobutton")).click();
    await browser.sleep(2000)
    await browser.element(by.model("first")).sendKeys("9")
    await browser.element(by.xpath("//option[@value='MODULO']")).click()
    await browser.element(by.model("second")).sendKeys("7")
    await browser.sleep(2000)
    await browser.element(by.id("gobutton")).click();
    await browser.sleep(2000)
    await browser.element(by.model("first")).sendKeys("9")
    await browser.element(by.xpath("//option[@value='MULTIPLICATION']")).click()
    await browser.element(by.model("second")).sendKeys("9")
    await browser.sleep(2000)
    await browser.element(by.id("gobutton")).click();
    await browser.sleep(2000)
    await browser.element(by.model("first")).sendKeys("7")
    await browser.element(by.xpath("//option[@value='SUBTRACTION']")).click()
    await browser.element(by.model("second")).sendKeys("7")
    await browser.sleep(2000)
    await browser.element(by.id("gobutton")).click();
    await browser.sleep(5000)
   
})
})