/**
 * Created by Oleh on 12.01.2018.
 */
import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});