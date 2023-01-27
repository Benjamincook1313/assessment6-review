
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("Draw button displays five cards", async () => {
    await driver.findElement(By.id("draw")).click();

    const five = await driver.findElements(By.className("bot-card")).then(bots => bots.length);

    expect(five).toEqual(5);
})

test("add bot to duo", async () => {
    await driver.findElement(By.id("draw")).click();

    await driver.findElement(By.className("bot-btn")).click();

    const displayed = await driver.findElement(By.xpath("//div[@id='player-duo']//div[1]")).isDisplayed();

    expect(displayed).toBeTruthy();

})
