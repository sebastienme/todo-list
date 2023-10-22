import { changeDom } from "./dom.js";
import { projectsTable } from "./projects.js";
import { localMethods } from "./local";
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
    console.log(taskId);
    projectsTable.forEach((item) => {
      if (item.nom.toLowerCase() === projectId) {
        console.log(projectsTable);
        console.log(item.tasksTable);
        item.tasksTable = _.reject(item.tasksTable, function (el) {
          return el.taskId === taskId;
        });
        console.log(item.tasksTable);
      }
    });
    element.remove();
    localMethods.saveToLocale();
  };

  //display tasks on the main page as per the due dates
  const showTasks = (projectId, dateFilter) => {
    
  };

  return {
    validateTask,
    deleteTask,
    showTasks,
  };
})();
