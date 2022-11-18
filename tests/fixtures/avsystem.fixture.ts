import {Selector, t} from "testcafe";

fixture("AVSystemPage")
  .page('https://www.avsystem.com/');

test("Should diplay logo", async (t: TestController) => {
  const logoExists = await Selector('.c-header__logo__image').exists;
  await t.expect(logoExists).ok();
});