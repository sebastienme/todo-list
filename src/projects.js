//---initialise array of Projects
export let projectsTable = new Array();

export const project = (nom) => {
    const tasksTable = [];
    const getName = () => nom;
    return {tasksTable, getName};
}
