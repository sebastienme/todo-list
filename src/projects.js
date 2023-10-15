import { changeDom } from "./dom.js";
import { localMethods } from "./local";
import _ from "lodash";

//---initialise array of Projects
let emptyProjectsTable = [];
export let projectsTable = localStorage.getItem("data");
projectsTable = JSON.parse(projectsTable || JSON.stringify(emptyProjectsTable));

//---Project object
export const project = (nom) => {
  const tasksTable = [];
  return { tasksTable, nom };
};

//---Validate the project form
export const validateProject = () => {
  document.getElementById("project-form").addEventListener("submit", (e) => {
    const inputResponse = document.querySelector(".input-name").value;

    e.preventDefault();

    if (
      inputResponse != "" &&
      projectsTable.find((element) => element.nom === inputResponse) == null
    ) {
      const oneProject = project(inputResponse);
      addProject(oneProject);
      changeDom.hideModal();
      changeDom.addProjectSection(oneProject);
      changeDom.setTaskId(inputResponse.toLowerCase());
      changeDom.showTasksList(inputResponse.toLowerCase());
      localMethods.saveToLocale();
    } else {
      document.querySelector(".input-name").style.borderColor = "#b90000";
    }
  });
};

// Add a project to the Mes Projets section
const addProject = (item) => {
  projectsTable.push(item);
};

//---Get the project clicked by the user
export const getProjectClicked = (id) => {
  return projectsTable.find((element) => element.nom.toLowerCase() == id);
};

//---Deletes a project when user click on delete button
export const deleteProject = (element) => {
  projectsTable = _.reject(projectsTable, function (el) {
    return el.nom.toLowerCase() === element.id;
  });
  element.remove();
  changeDom.clearTasks();
  localMethods.saveToLocale();
};
