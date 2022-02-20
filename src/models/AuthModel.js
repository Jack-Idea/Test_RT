import { pageModel } from "./PageModel";

class AuthModel {
    auth() {
        return async t => {
            await t
                .typeText(pageModel.usernameField, 'German Makarenko')
                .click(pageModel.submitButton)
                .typeText(pageModel.passwordFiled, 'test123')
                .click(pageModel.submitButton)
                .expect(pageModel.username.innerText).eql('German Makarenko');
        }
    }
}

export const authModel = new AuthModel();