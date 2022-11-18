import { FormPage } from "../pages/formPage"
import { TestData } from "../utils/data"

fixture('Form view')
    .page('http://localhost:4200/form')

test('Should accept valid input', async t => {
    // arrange
    const formPage = new FormPage();
    const data = new TestData();
    // act
    await formPage.fillForm(t, data.name, data.alterEgo);
    await formPage.selectHeroPower(t);
    await formPage.submitForm(t);
    // assert
    await t.expect(await formPage.checkResultsOfTheForm(t, data.name, data.alterEgo)).ok();
})

test('Should not allow submiting without hero power', async t => {
    // arrange
    const formPage = new FormPage();
    const data = new TestData();
    // act
    await formPage.clickNewHero(t);
    await formPage.fillForm(t, data.name, data.alterEgo);
    
    // assert
    await t.expect(formPage.submitFormIsDisabled).ok();
})

test('Should not allow submiting without hero power', async t => {
    // arrange
    const formPage = new FormPage();
    const data = new TestData();
    
    // act
    await formPage.clickNewHero(t);
    await formPage.fillForm(t, data.name, data.alterEgo);
    
    // assert
    await t.expect(formPage.submitFormIsDisabled).ok();
})

test('Should not allow submiting without hero name', async t => {
    // arrange
    const formPage = new FormPage();
    
    // act
    await formPage.deleteNameContentFromForm(t);

    // assert
    await t.expect(formPage.submitFormIsDisabled).ok();
    await t.expect(formPage.nameAlertIsHidden).notOk();
    
})