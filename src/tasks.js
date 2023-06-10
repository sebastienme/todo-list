import {changeDom} from './dom.js';

const Task = (title, description, dueDate) => {
    
    return {title, description, dueDate}
}

export const taskMethods = (() => {

    //---Validate the project form
    const validateTask = () => {
        document.getElementById('task-form').addEventListener('submit', (e) => {
            const inputName = document.querySelector('.input-name').value;
            const inputDescription = document.querySelector('.input-description').value;
            const inputDate = document.querySelector('.input-date').value;
            console.log(inputName)
            console.log(inputDescription)
            console.log(inputDate)
            e.preventDefault();

            if (inputName != '' && inputDate != '') {
                //const oneProject = project(inputResponse);
                // addProject(oneProject);
                changeDom.hideModal();
                // changeDom.addProjectSection(oneProject);
                // changeDom.setTaskId(inputResponse.toLowerCase());
                // changeDom.showTasksList(inputResponse.toLowerCase());
                // saveToLocale();
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

    return {
        validateTask
    }
})();
