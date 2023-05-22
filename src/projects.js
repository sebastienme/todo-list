import {changeDom} from './dom.js';

//---initialise array of Projects
export let projectsTable = new Array();

export const project = (nom) => {
    const tasksTable = [];
    const getName = () => nom;
    const addProject = (item) => {
        projectsTable.push(item)
        //---projectsTable[0].tasksTable.push('je suis objet')
        console.log(projectsTable[0].getName())
    }
    return {tasksTable, getName, addProject};
}

export const validateProject = () => {
    document.getElementById('project-form').addEventListener('submit', (e) => {
        const inputResponse = document.querySelector('.input-name').value;
        
        e.preventDefault();

        if (inputResponse != '') {
            const oneProject = project(inputResponse);
            oneProject.addProject(oneProject);
            changeDom.hideModal();
            changeDom.addProjectSection(oneProject);
        } else {
            document.querySelector('.input-name').style.borderColor = '#b90000';
        }
    })
}
