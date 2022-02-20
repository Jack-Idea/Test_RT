import { authModel } from "../models/AuthModel";
import { createTaskModel } from "../models/CreateTaskModel";
import { checkTaskModel } from "../models/CheckTaskModel";

fixture`MantisBT test(s)`
    .page`https://mantisbt.org/bugs/login_page.php`;

// Авторизация пользователя в системе и проверка, что нужный пользователь авторизирован
test('test 1 Authorization', authModel.auth());

// Создание задачи
// Шаг 1 - Авторизация пользователя
// Шаг 2 - Переход на страницу создания задачи, заполнение обязательных полей корректными данными, клик "Создать задачу", проверка на существование задачи
test('test 2 Create Task', createTaskModel.create());

// Проверка на существование последней задачи
// Шаг 1 - Авторизация
// Шаг 2 - Переход на страницу задач "Созданные мной", находим первую задачу из списка (последнюю созданную), проверяем на соответсвие названию темы
test('test 3 Check Task', checkTaskModel.checkTask());