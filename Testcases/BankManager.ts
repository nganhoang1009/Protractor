import {browser, by} from 'protractor'
//suite
describe("Bankmanager page ", function (){
    // testcase
    it("should be navigated to HomePage when login with valid account", async function(){
        await browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
        await browser.manage().window().maximize()
        await browser.element(by.xpath("//button[@ng-click='manager()']")).click()
        await browser.element(by.xpath("//button[@ng-click='addCust()']")).click()
        await browser.element(by.model("fName")).sendKeys("ngan")
        await browser.sleep(2000) 
        await browser.element(by.model("lName")).sendKeys("nganga")
        await browser.sleep(2000) 
        await browser.element(by.model("postCd")).sendKeys("ngan123")
        await browser.sleep(2000) 
        await browser.element(by.xpath("//button[@class='btn btn-default']")).click()
        await browser.sleep(2000) 
        await browser.switchTo().alert().accept()
        await browser.element(by.xpath("//button[@ng-click='showCust()']")).click()
    //    await browser.sleep(2000) 
    //    await browser.element(by.xpath("//button[@ng-click='deleteCust(cust)']")).click()
   //     await browser.element(by.xpath(""))
      //   await browser.element(by.xpath("//td[text()='ngangaa123']/following-sibling::td/button")).click()
        await browser.sleep(50000)  


    })
})