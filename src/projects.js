import {changeDom} from './dom.js';

//---initialise array of Projects
let emptyProjectsTable = [];
export let projectsTable = localStorage.getItem('data');
projectsTable = JSON.parse(projectsTable || JSON.stringify(emptyProjectsTable));

export const project = (nom) => {
    const tasksTable = [];
    return {tasksTable, nom};
}

export const validateProject = () => {
    document.getElementById('project-form').addEventListener('submit', (e) => {
        const inputResponse = document.querySelector('.input-name').value;
        
        e.preventDefault();

        if (inputResponse != '') {
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

//---probablement faire un module patern dans dom.js pour initialiser la page avec le local storage si pas vide.

const saveToLocale = () => {
    localStorage.setItem('data', JSON.stringify(projectsTable));
}
