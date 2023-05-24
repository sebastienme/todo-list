import {changeDom} from './dom.js';

//---initialise array of Projects
export let projectsTable = new Array();
console.log(projectsTable)
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
            save(inputResponse);
        } else {
            document.querySelector('.input-name').style.borderColor = '#b90000';
        }
    })
}

//---probablement faire un module patern dans dom.js pour initialiser la page avec le local storage si pas vide.

const save = (newData) => {

    //---ift there is nothing saved at the start then save an empty array
    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }

    //---get old data and slap it to the new data
    let oldData = JSON.parse(localStorage.getItem('data'));
    oldData.push(newData);

    //---save the old + new data to local storage
    localStorage.setItem('data', JSON.stringify(oldData));
}
