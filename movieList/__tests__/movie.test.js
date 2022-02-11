const { Builder, Capabilities, By } = require("selenium-webdriver");
require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

afterAll(async () => {
  await driver.quit();
});

// test('add movie list', async () => {
//     const input = await driver.findElement(By.xpath('//input'))

//     const searchTerm = 'Hello'

// })

test("crossing movie off list", async () => {
  const theInput = await driver.findElement(By.xpath("//input"));

  const searchTerm = "Howdy";

  await theInput.sendKeys(searchTerm);

  const theButton = await driver.findElement(By.css("button"));
  await theButton.click();

  const result = await driver.findElement(By.xpath("//li/span"));
  await result.click();

  await driver.sleep(3000);
});

test("delete list item", async () => {
  const theInput = await driver.findElement(By.xpath("//input"));

  const searchTerm = "howdy2";

  await theInput.sendKeys(searchTerm);

  const theButton = await driver.findElement(By.css("button"));
  await theButton.click();

  const result = await driver.findElement(By.xpath("//li/span"));
  await result.click();

  await driver.sleep(3000);

  const deleteButton = await driver.findElement(By.id(`${searchTerm}`));

  await deleteButton.click();
});

test("delete message", async () => {
  const theInput = await driver.findElement(By.xpath("//input"));

  const searchTerm = "Howdy3";

  await theInput.sendKeys(searchTerm);

  const theButton = await driver.findElement(By.css("button"));
  await theButton.click();

  const result = await driver.findElement(By.xpath("//li/span"));
  await result.click();

  await driver.sleep(3000);

  const deleteButton = await driver.findElement(By.id(`${searchTerm}`));

  await deleteButton.click();

  const deletionMessage = await driver
    .findElement(By.xpath("//aside"))
    .getText();
  expect(deletionMessage).toContain(`${searchTerm} deleted!`);
});
