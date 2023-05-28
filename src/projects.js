import {changeDom} from './dom.js';
import _ from 'lodash';

//---initialise array of Projects
let emptyProjectsTable = [];
export let projectsTable = localStorage.getItem('data');
projectsTable = JSON.parse(projectsTable || JSON.stringify(emptyProjectsTable));

//---Project object
export const project = (nom) => {
    const tasksTable = [];
    return {tasksTable, nom};
}

//---Validate the project form
export const validateProject = () => {
    document.getElementById('project-form').addEventListener('submit', (e) => {
        const inputResponse = document.querySelector('.input-name').value;
        
        e.preventDefault();

        if (inputResponse != '' && projectsTable.find(element => element.nom === inputResponse) == null) {
            const oneProject = project(inputResponse);
            addProject(oneProject);
            changeDom.hideModal();
            changeDom.addProjectSection(oneProject);
            saveToLocale();
        } else {
            document.querySelector('.input-name').style.borderColor = '#b90000';
        }
    })
}


const addProject = (item) => {
    projectsTable.push(item)
}

//---Save the array of projects to localStorage
const saveToLocale = () => {
    localStorage.setItem('data', JSON.stringify(projectsTable));
}


//---Get the project clicked by the user
export const getProjectClicked = (id) => {
    const project = projectsTable.find(element => element.nom.toLowerCase() == id);

    console.log(project);
}

export const deleteProject = (element) => {
    projectsTable = _.reject(projectsTable, function(el) { return el.nom.toLowerCase() === element.id });
    element.remove();
    saveToLocale();
}