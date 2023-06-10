import {changeDom} from './dom.js';
import {projectsTable} from './projects.js';
import {localMethods} from './local'

const Task = (title, description, dueDate) => {
    return {title, description, dueDate}
}

export const taskMethods = (() => {

    //---Validate the project form
    const validateTask = (id) => {
        document.getElementById('task-form').addEventListener('submit', (e) => {
            const inputName = document.querySelector('.input-name').value;
            const inputDescription = document.querySelector('.input-description').value;
            const inputDate = document.querySelector('.input-date').value;

            e.preventDefault();

            if (inputName != '' && inputDate != '') {
                const oneTask = Task(inputName, inputDescription, inputDate);
                addTask(oneTask, id);
                changeDom.hideModal();
                // changeDom.addProjectSection(oneProject);
                // changeDom.setTaskId(inputResponse.toLowerCase());
                // changeDom.showTasksList(inputResponse.toLowerCase());
                localMethods.saveToLocale();
            } else if (inputName == '' && inputDate == '') {
                document.querySelector('.input-name').style.borderColor = '#b90000';
                document.querySelector('.input-date').style.borderColor = '#b90000';
            } else if (inputName == '') {
                document.querySelector('.input-name').style.borderColor = '#b90000';
            } else if (inputDate == '') {
                document.querySelector('.input-date').style.borderColor = '#b90000';
            }
        })
    }


    // Add a task to the right project
    const addTask = (task, projectId) => {
        projectsTable.forEach(element => element.nom.toLowerCase() == projectId ? element.tasksTable.push(task) : null);
        console.log(projectsTable)
    }

    return {
        validateTask
    }
})();
