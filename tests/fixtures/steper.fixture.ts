import { StepperPage } from "../pages/stepperPage"
import { TestData } from "../utils/data"

fixture('Stepper view')
    .page('http://localhost:4200/stepper')


test('Should accept valid path through', async t => {
    // arrange
    const stepperPage = new StepperPage();
    const data = new TestData();

    // act
    await stepperPage.fillName(t, data.name);
    await stepperPage.clickNext(t);
    await stepperPage.fillAddress(t, data.address);
    await stepperPage.clickNextAgain(t);
    
    // assert
    await t.expect(stepperPage.doneExists).ok();
})

test('Should remember imput', async t => {
    // arrange
    const stepperPage = new StepperPage();
    const data = new TestData();

    // act
    await stepperPage.fillName(t, data.name);
    await stepperPage.clickNext(t);
    await stepperPage.clickBack(t);
    await stepperPage.clickNext(t);
    await stepperPage.fillAddress(t, data.address);
    await stepperPage.clickNextAgain(t);
       
    // assert
    await t.expect(stepperPage.doneExists).ok();
    await t.expect(await stepperPage.outputOfName).contains(data.name);
})