//---initialise array of Projects
export let projectsTable = new Array();

export const project = (nom) => {
    const tasksTable = [];
    const getName = () => nom;
    const addProject = (item) => {
        projectsTable.push(item)
        //---projectsTable[0].tasksTable.push('je suis objet')
        console.log(projectsTable)
    }
    return {tasksTable, getName, addProject};
}
