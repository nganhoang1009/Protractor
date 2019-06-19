import {browser, by} from 'protractor'
//suite
describe("Login page ", function (){
    // testcase
    it("should be navigated to HomePage when login with valid account", async function(){
        // automate each step
        await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login")
        await browser.manage().window().maximize()
        await browser.element(by.xpath("//input[@id='username']")).sendKeys("angular")
        await browser.element(by.xpath("//input[@id='password']")).sendKeys("password")
        await browser.element(by.xpath("//input[@id='formly_1_input_username_0']")).sendKeys("angular123")
        await browser.element(by.xpath("//button[@class='btn btn-danger']")).click()
        await browser.sleep(5000)
        await browser.element(by.linkText("Logout")).click()
  //     await expect(browser.element(by.xpath("//h1[@class='ng-scope']")).isDisplayed()).toBe(true)
        await browser.sleep(5000)  
        


        


        

       
        //verify result
       
    })
})