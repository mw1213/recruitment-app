# E2e test configuration with testcafe

## Prerequisites

The test task instructions require to have installed on the device:
- Node version: v14.15 or v16.10 [my setup is v16.10]
- NPM version: v6.14.5
- Angular cli

## Test configuration 

from the base folder level:

`npm install --save-dev testcafe`

as the typescript is already in the `package.json` I don't need to add it

write a simple test scenario for checking the setup under tests/fixtures folder:

```
import {Selector, t} from "testcafe";

fixture("AVSystemPage")
  .page('https://www.avsystem.com/');

test("Should diplay logo and sign in button", async (t: TestController) => {
  const logoExists = await Selector('.c-header__logo__image').exists;
  const loginButtonText = await Selector('.btn-new btn-new--transparentWhite btn-new--small').innerText;
  await t.expect(logoExists).ok();
  await t.expect(loginButtonText).eql("Sign in");
});
```


add to `package.json` new **e2e** entry under scripts:
```
  ...
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "e2e": "testcafe chrome tests/fixtures/"
  },
  ...
```


test new script with
`npm run e2e`

You should have running testcafe setup with 1 passing test 