import { changeDom } from "./dom.js";
import { projectsTable } from "./projects.js";
import { localMethods } from "./local";
import { dates } from "./utilities";
import _ from "lodash";

const Task = (title, description, dueDate, taskId) => {
  return { title, description, dueDate, taskId };
};

export const taskMethods = (() => {
  //---Validate the project form
  const validateTask = (id) => {
    document.getElementById("task-form").addEventListener("submit", (e) => {
      const inputName = document.querySelector(".input-name").value;
      const inputDescription =
        document.querySelector(".input-description").value;
      const inputDate = document.querySelector(".input-date").value;

      e.preventDefault();

      if (inputName != "" && inputDate != "") {
        const taskId = "id" + Math.random().toString(16).slice(2);
        const oneTask = Task(inputName, inputDescription, inputDate, taskId);
        addTask(oneTask, id);
        changeDom.hideModal();
        // changeDom.addProjectSection(oneProject);
        // changeDom.setTaskId(inputResponse.toLowerCase());
        changeDom.showTasksList(id);
        localMethods.saveToLocale();
      } else if (inputName == "" && inputDate == "") {
        document.querySelector(".input-name").style.borderColor = "#b90000";
        document.querySelector(".input-date").style.borderColor = "#b90000";
      } else if (inputName == "") {
        document.querySelector(".input-name").style.borderColor = "#b90000";
      } else if (inputDate == "") {
        document.querySelector(".input-date").style.borderColor = "#b90000";
      }
    });
  };

  // Add a task to the right project
  const addTask = (task, projectId) => {
    projectsTable.forEach((element) =>
      element.nom.toLowerCase() == projectId
        ? element.tasksTable.push(task)
        : null
    );
  };

  //Deletes a task when user click on delete button
  const deleteTask = (element, projectId, taskId) => {
    projectsTable.forEach((item) => {
      if (item.nom.toLowerCase() === projectId) {
        item.tasksTable = _.reject(item.tasksTable, function (el) {
          return el.taskId === taskId;
        });
      }
    });
    element.remove();
    localMethods.saveToLocale();
  };

  //display tasks on the main page as per the due dates
  const getTasks = (projectId, dateFilter) => {
    const actualDate = new Date();
    let table = [];
    
    if (dateFilter === 0) {
      table = projectsTable.find(element => element.nom.toLowerCase() == projectId).tasksTable
      .filter(element => (dates.getDaysDifference(new Date(element.dueDate), actualDate) === dateFilter));
    } else if (dateFilter === 7) {
      table = projectsTable.find(element => element.nom.toLowerCase() == projectId).tasksTable
      .filter(element => (dates.getDaysDifference(new Date(element.dueDate), actualDate) <= dateFilter));
    } else {
      table = projectsTable.find(element => element.nom.toLowerCase() == projectId).tasksTable;
    }
    
    return table;
  };

  return {
    validateTask,
    deleteTask,
    getTasks,
  };
})();
