import { Selector} from "testcafe";

export class StepperPage {
    private readonly _nameInput = Selector('#mat-input-0');
    private readonly _addressInput = Selector('#mat-input-1');
    private readonly _buttons = Selector('button').withText('Next');
    private readonly _backButtons = Selector('button').withText('Back');
    private readonly _doneText = Selector('.ng-star-inserted');

    public async fillName(t: TestController, name: string)
    {
        await t.typeText(this._nameInput, name);
    }

    public async fillAddress(t: TestController, addr: string)
    {
        await t.typeText(this._addressInput, addr);
    }

    public async clickNext(t: TestController)
    {
        await t.click(this._buttons.nth(0));
    }

    public async clickBack(t: TestController)
    {
        await t.click(this._backButtons.nth(0));
    }

    public async clickNextAgain(t: TestController)
    {
        await t.click(this._buttons.nth(1));
    }

    public get doneExists(): Promise<boolean>
    {
        return this._doneText.nth(0).exists;
    }

    public get outputOfName(): Promise<string>
    {
        return this._doneText.nth(1).innerText;
    }
}