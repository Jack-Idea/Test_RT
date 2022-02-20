import { pageModel } from "./PageModel";
import { authModel } from "./AuthModel";
import { Role } from 'testcafe';

const authUser = Role('https://mantisbt.org/bugs/login_page.php', authModel.auth());

class CheckTaskModel {
    checkTask() {
        return async t => {
            await t
                .useRole(authUser)
                .click(pageModel.myTasksList)
                .expect(pageModel.lastTask.innerText).eql('Тест тема');
        }
    }
}

export const checkTaskModel = new CheckTaskModel();