import { Selector} from "testcafe";

export class FormPage {
    private readonly _superFlexibleText = 'Super Flexible';
    private readonly _nameInput = Selector('#name');
    private readonly _alrterEgoInput = Selector('#alterEgo');
    private readonly _heroPowerSelection = Selector('#power');
    private readonly _heroPowerFlexible = Selector('option').withText(this._superFlexibleText);
    private readonly _submitButton = Selector('button').withText('Submit');
    private readonly _newHeroButton = Selector('button').withText('New Hero');
    private readonly _nameMissingPopUp = Selector('.alert.alert-danger').nth(0);

    private readonly _results = Selector('.col-xs-9')

    public async fillForm(t: TestController, name: string, alterEgo: string)
    {
        await t.typeText(this._nameInput, name, { replace: true });
        await t.typeText(this._alrterEgoInput, alterEgo, { replace: true });
    }

    public async deleteNameContentFromForm(t: TestController)
    {
        await t.selectText(this._nameInput).pressKey('delete');
    }

    public async selectHeroPower(t: TestController)
    {
        await t.click(this._heroPowerSelection).click(this._heroPowerFlexible);
    }

    public async submitForm(t:TestController)
    {
        await t.click(this._submitButton)
    }

    public async clickNewHero(t:TestController)
    {
        await t.click(this._newHeroButton)
    }

    public async checkResultsOfTheForm(t: TestController, expectedName: string, expectedAlterEgo: string): Promise<boolean>
    {
        if (!await this._results.exists){
            return false;
        }
        await t.expect(this._results.nth(0).textContent).eql(expectedName);
        await t.expect(this._results.nth(1).textContent).eql(expectedAlterEgo);
        await t.expect(this._results.nth(2).textContent).eql(this._superFlexibleText);
        return true;
    }

    public get submitFormIsDisabled(): Promise<boolean>{
        return this._submitButton.hasAttribute('disabled')
    }

    public get nameAlertIsHidden(): Promise<boolean>{
        return this._nameMissingPopUp.hasAttribute('hidden')
    }
}