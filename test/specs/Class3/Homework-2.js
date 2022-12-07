 // Due date: Nov 21 (Mon)

 describe('Homework - 2', () => {
    
    /**
    * TC-1: https://www.facebook.com/
    * Facebook: Verify current date is displayed on Sign-Up form
    * 
    * Steps:
    * 1. Launch facebook.com
    * 2. Click Create New Account button
    * 3. Verify current date is displayed in Date of birth dropdowns
    *
    */
    it('TC - 1', async () => {
        await browser.url('https://www.facebook.com');

        const createNewAccountButton = await $('=Create New Account');
        createNewAccountButton.click();

        const currentDateDisplayed = await $('=Verify current date is displayed on Sign-Up form').isDisplayed();
        console.log(`currentDateDisplayed -> ${currentDateDisplayed}\n`);

       
    });


    /**
    * TC-2: https://www.facebook.com/
    * Facebook: Verify user gets error when submits empty login form
    * 
    * Expected error msg -> The email address or mobile number you entered isn't connected to an account.
    */
    it('TC - 2', async () => {
        await browser.url('https://www.facebook.com');

        await browser.pause(3000);

        const loginErrorLink = await $('=user gets error when submits empty login form');
        const isLoginErrorLinkEnabled = await loginErrorLink.isEnabled();
        expect(isLoginErrorLinkEnabled, 'user gets error when submits empty login form').to.be.true;

        await browser.pause(3000);

        const loginErrorText = await $('div*=The email address or mobile number');
        const isLoginErrorTextDisplayed = await loginErrorText.isDisplayed();
        expect(isLoginErrorTextDisplayed, 'Login error text is NOT displayed').to.be.true;

        await browser.pause(3000);

    });


    /**
    * TC-3: https://www.facebook.com/
    * Facebook: Verify user gets error when submit empty login on messenger screen
    * 
    * 1. Click Messenger
    * 2. Verify "Keep me signed in" is NOT selected
    * 3. Click "Log in" button
    * 4. Verify link (Find your account and log in.) is displayed
    * 5. Verify "Continue" button is enabled
    * 6. Verify "Keep me signed in" is NOT selected
    * 7. Click "Keep me signed in" checkbox
    * 8. Verify "Keep me signed in" is selected
    * 
    */
    it('TC - 3', async () => {
       
       await browser.url('https://www.facebook.com');

       await $('=Messenger').click();

       await browser.pause(3000);

       const messengerCheckBox = await $('//input[@type="checkbox"]').isSelected();
       console.log(`messengerCheckBox -> ${messengerCheckBox}\n`);

       await $('#loginbutton').click();

       await browser.pause(3000);

       const errorLinkDisplayed = await $('=Find your account and log in.').isDisplayed();
       console.log(`errorLinkDisplayed -> ${errorLinkDisplayed}\n`);

       await browser.pause(3000);

       const isContinueEnabled = await $('#loginbutton').isEnabled();
       console.log(`isContinueEnabled -> ${isContinueEnabled}\n`);

       const errorCheckBox = await $('//input[@type="checkbox"]');
       const isErrorCheckBoxSelected = await errorCheckBox.isSelected();
       console.log(`isErrorCheckBoxSelected -> ${isErrorCheckBoxSelected}\n`);


       await $('//label[@class="uiInputLabelInput"]').click();


       const errorCheckBox2 = await $('//input[@type="checkbox"]');
       const isErrorCheckBoxSelected2 = await errorCheckBox2.isSelected();
       console.log(`isErrorCheckBoxSelected2 -> ${isErrorCheckBoxSelected2}\n`);

     });


        /**
        * TC-4: https://www.darksky.net/
        * Darksky: Verify feelsLikeTempValue is in between lowTempValue and highTempValue
        * 
        * 31˚(string) -> 31(string) -> 31(number)
        * 25˚(string) -> 25(string) -> 25(number)
        * 39˚(string) -> 39(string) -> 39(number)
        * 
        * feelsLikeTempValue <= lowTempValue AND feelsLikeTempValue <= highTempValue
        * 
        */


    });     