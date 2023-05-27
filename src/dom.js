import {projectsTable, project, validateProject} from './projects.js';

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
        changeDom.createForm('project-form');
    })
})();


//---(a changer quand il va y en avoir plusieurs) initiation of toggle check task 
(() => {
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
})();

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

    const createForm = (id) => {
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
        const dots = document.createElement('img');

        item.setAttribute('class', 'panel-item project');
        img.setAttribute('class', 'panel-item__icon');
        img.setAttribute('src', '/src/images/folder-close.png');
        div.setAttribute('class', 'panel-item__text');
        div.innerHTML = projet.nom;
        dots.setAttribute('class', 'panel-item__icon dots');
        dots.setAttribute('src', '/src/images/white-dots.png')

        //---->Ajouter un addEventListener pour ouvrir le folder quand on clique dessus<-----

        item.appendChild(img);
        item.appendChild(div);
        item.appendChild(dots);
        projectSection.insertBefore(item, document.querySelector('.panel-item.add-project'));
    }

    const initialiseProjects = () => {
        projectsTable.forEach(item => addProjectSection(item));
    }


    return {
        taskTitle,
        toggleClassList,
        createForm,
        hideModal,
        addProjectSection,
        initialiseProjects
    }
})();


