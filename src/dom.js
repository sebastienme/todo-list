import {projectsTable, project, validateProject, getProjectClicked, deleteProject} from './projects.js';

//---initiation functions for left panel items
(() => {
    const panelItem = document.querySelectorAll('.panel-item');
    
    panelItem.forEach(element => {
        element.addEventListener('click', () => {
            const classe = element.getAttribute('class');
            
            panelItem.forEach(element => {
                element.style.backgroundColor = '';
                element.style.borderLeftColor = '';

            })

            if (classe.includes('sun')) {
                element.style.backgroundColor = '#ffc42f85';
                element.style.borderLeftColor = '#FFC52F';
                changeDom.taskTitle('#FFC52F', "Aujourd'hui");

            } else if (classe.includes('moon')) {
                element.style.backgroundColor = '#592fff85';
                element.style.borderLeftColor = '#592FFF';
                changeDom.taskTitle('#592FFF', "7 jours");

            } else if (classe.includes('folder')) {
                element.style.backgroundColor = '#00b90685';
                element.style.borderLeftColor = '#00B906';
                changeDom.taskTitle('#00B906', "Tous");
            }
        })
    })
})();

//---initiation of the add a task button
(() => {
    const addTaskButton = document.querySelector('.task-item.add-task');

    addTaskButton.addEventListener('click', () => {
        if (projectsTable.length == 0) {
            changeDom.toggleClassList('.background-modal-form-section', 'fade');
            changeDom.toggleClassList('.modal', 'open');
            changeDom.createProjectForm('project-form');
        }
        
    })
})();

//initiation of the project to display
(() => {
    if (projectsTable.length > 0) {
        changeDom.showTasksList(projectsTable[0].nom.toLowerCase());
    }
})();

//---initiation of hamburger menu
(() => {
    const hamburger = document.querySelector('.navbar-col');

    hamburger.addEventListener('click', () => {
        changeDom.toggleClassList('.nav-panel','collapsed')
    })
})();


//---initiation of add a project button.
//---it adds a new project to project folder
(() => {
    const addProjectSelect = document.querySelector('.panel-item.add-project');

    addProjectSelect.addEventListener('click', () => {
        changeDom.toggleClassList('.background-modal-form-section', 'fade');
        changeDom.toggleClassList('.modal', 'open');
        changeDom.createProjectForm('project-form');
    })
})();


//---(a changer quand il va y en avoir plusieurs) initiation of toggle check task 
/* (() => {
    const toggleMark = document.querySelector('.task-toggle');
    const image = document.createElement('img');

    toggleMark.addEventListener('click', () => {
        
        if (toggleMark.getAttribute('class').includes('not-selected')) {
            toggleMark.style.backgroundColor = 'var(--secondary-color)';
            image.setAttribute('src', '/src/images/check-mark.png');
            image.setAttribute('class', 'check-selected');
            toggleMark.appendChild(image);

        } else {
            toggleMark.innerHTML = '';
            toggleMark.style.backgroundColor = '';
        }
        toggleMark.classList.toggle("not-selected");
    })
})(); */

//---module patern function that change the dom
export const changeDom = (() => {
    
    const taskTitle = (color, text) => {
        const topTitle = document.querySelector('.main-content__top__title');
        topTitle.style.backgroundColor = color;
        topTitle.innerHTML = text;
    };

    const toggleClassList = (selector, classe) => {
        const theSelector = document.querySelector(selector);
        theSelector.classList.toggle(classe);
    }

    const createProjectForm = (id) => {
        const modal = document.querySelector('.modal__box');
        const img = document.createElement('img');
        const newForm = document.createElement('form');
        const input = document.createElement('input');
        const label = document.createElement('label');
        const newInput = document.createElement('input');
        
        img.setAttribute("class", "close-btn");
        img.setAttribute("src", "/src/images/close.png")
        img.addEventListener('click', () => hideModal());
        
        newForm.setAttribute("method", "get");
        newForm.setAttribute("id", id);
    
        label.setAttribute("for", "name");
        label.innerHTML = "Nom du projet:"

        input.setAttribute("type", "text");
        input.setAttribute("name", "name");
        input.setAttribute("id", "name");
        input.setAttribute("class", "input-name");

        newInput.setAttribute("type", "submit");
        newInput.setAttribute("value", "sousmettre");
        newInput.setAttribute("id", "sousmettre");

        modal.appendChild(img)
        modal.appendChild(newForm);
        newForm.appendChild(label);
        newForm.appendChild(input);
        newForm.appendChild(newInput);

        validateProject();
    }

    const hideModal = () => {
        toggleClassList('.background-modal-form-section', 'fade');
        toggleClassList('.modal', 'open');
        document.querySelector('.modal__box').innerHTML = '';
    }

    const addProjectSection = (projet) => {
        const projectSection = document.querySelector('.nav-panel__ul.project');
        const item = document.createElement('li');
        const img = document.createElement('img');
        const div = document.createElement('div');
        const wrapperDiv = document.createElement('div');
        const dots = document.createElement('img');

        function projectClicked(event) {
            const projectListItems = document.querySelectorAll('.panel-item.project');
            const clickedListItem = event.target.closest('.panel-item.project');
            let imageToChange = '';

            //if user click on the three dots of a project in project list
            if (event.target.classList.contains('dots-menu') || 
                event.target.classList.contains('dots-menu__item__text') || event.target.classList.contains('dots-menu__item__img')) {
                deleteProject(clickedListItem);
            } else if (event.target.classList.contains('dots')) {
                openProjectMenu(event.target.closest('.panel-item__wrapper'));
            } else {
                projectListItems.forEach(element => {
                    if (clickedListItem.id == element.id) {
                        imageToChange = clickedListItem.querySelector('.panel-item__icon.main');
                        imageToChange.src = '/src/images/folder-2.png';
                        setTaskId(element.id);
                    } else {
                        imageToChange = element.querySelector('.panel-item__icon.main');
                        imageToChange.src = '/src/images/folder-close.png';
                    }
                })
                getProjectClicked(clickedListItem.id);
            }
        }

        item.setAttribute('class', 'panel-item project');
        item.setAttribute('id', projet.nom.toLowerCase());
        item.addEventListener('click', projectClicked);
        img.setAttribute('class', 'panel-item__icon main');
        img.setAttribute('src', '/src/images/folder-2.png');
        div.setAttribute('class', 'panel-item__text');
        div.innerHTML = projet.nom;
        dots.setAttribute('class', 'panel-item__icon dots');
        dots.setAttribute('src', '/src/images/white-dots.png');
        wrapperDiv.setAttribute('class', 'panel-item__wrapper')

        wrapperDiv.appendChild(dots)
        item.appendChild(img);
        item.appendChild(div);
        item.appendChild(wrapperDiv);
        projectSection.insertBefore(item, document.querySelector('.panel-item.add-project'));
    }

    const initialiseProjects = () => {
        projectsTable.forEach(item => addProjectSection(item));
    }

    const openProjectMenu = (wrapper) => {
        const ul = document.createElement('ul');
        ul.setAttribute('class', 'dots-menu');
        ul.innerHTML = `
        <li class="dots-menu__item">
            <div class="dots-menu__item__text">Supprimer Projet</div>
            <img class="dots-menu__item__img" src="/src/images/delete.png">
        </li>
        `
        wrapper.appendChild(ul);

        // function that remove the projectMenu popup
        document.addEventListener('click', function(event) {
            // Check if the clicked element is the div or a descendant of the div
            const isClickedInsideDiv = wrapper.contains(event.target);
            // If the clicked element is outside the div, remove the div
            if (!isClickedInsideDiv) {
            ul.remove();
            }
        });
    }

    const setTaskId = (id) => {
        document.querySelector('.task-item.add-task').setAttribute('id', id);
    }

    const showTasksList = (id) => {
        //first clear the open folder project
        const projectListItems = document.querySelectorAll('.panel-item.project');
        let imageToChange = '';
        projectListItems.forEach(element => {
            if (id == element.id) {
                setTaskId(element.id);
            } else {
                imageToChange = element.querySelector('.panel-item__icon.main');
                imageToChange.src = '/src/images/folder-close.png';
            }
        })

        //second show the task list
    }


    const initialiseTaskAddButton = () => {
        
        console.log(projectsTable.length)

       const taskkk = `                        <li class="task-item">
        <div class="task-item__toggle">
            <span class="task-toggle not-selected"></span>
        </div>
        <div class="task-item__main">
            <div class="task-title">Faire le menage</div>
            <div class="task-description">ne pas oublie de faire la sale de bain</div>
            <div class="task-date">
                <img class="task-date-icon icon" src="/src/images/calendar-2.png">
                <div class="task-date">6 avril 2023</div>    
            </div>
        </div>
        <div class="task-item__settings">
            <img class="task-settings icon" src="/src/images/dots.png">
        </div>
    </li>`;
    }


    return {
        taskTitle,
        toggleClassList,
        createProjectForm,
        hideModal,
        addProjectSection,
        initialiseProjects,
        setTaskId,
        showTasksList,
        initialiseTaskAddButton
    }
})();



