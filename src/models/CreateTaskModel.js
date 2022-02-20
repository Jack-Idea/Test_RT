import { pageModel } from "./PageModel";
import { authModel } from "./AuthModel";
import { Role } from 'testcafe';

const authUser = Role('https://mantisbt.org/bugs/login_page.php', authModel.auth());

class CreateTaskModel {
    create() {
        return async t => {
            await t
                .useRole(authUser)
                .click(pageModel.createTaskButton)
                .click(pageModel.submitButton)
                .click(pageModel.categorySelector)
                .click(pageModel.categoryValue)
                .click(pageModel.reproducibilitySelector)
                .click(pageModel.reproducibilityValue)
                .typeText(pageModel.subjectField, 'Тест тема')
                .typeText(pageModel.descriptionField, 'Описание тестовой темы')
                .click(pageModel.submitButton)
                .expect(pageModel.bugId.exists).ok('not exist');
        }
    }
}

export const createTaskModel = new CreateTaskModel();