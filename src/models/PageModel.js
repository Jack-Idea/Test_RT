import { Selector } from 'testcafe';

class PageModel {
    constructor() {
        this.usernameField = Selector('#username');
        this.submitButton = Selector('input').withAttribute('type', 'submit');
        this.passwordFiled = Selector('#password');
        this.username = Selector('a>.user-info');
        this.createTaskButton = Selector('div>ul>li>div>a').withAttribute('href', 'bug_report_page.php');
        this.categorySelector = Selector('#category_id');
        this.categoryValue = Selector('option').withText('administration');
        this.reproducibilitySelector = Selector('#reproducibility');
        this.reproducibilityValue = Selector('option').withText('иногда');
        this.subjectField = Selector('input').withAttribute('id', 'summary');
        this.descriptionField = Selector('textarea').withAttribute('id', 'description');
        this.bugId = Selector('td').withAttribute('class', 'bug-id');
        this.myTasksList = Selector('#reported>div>h4>a').withText('Созданные мной');
        this.lastTask = Selector('#buglist>tbody>tr:nth-child(1)>td.column-summary>a');
    }
}

export const pageModel = new PageModel();