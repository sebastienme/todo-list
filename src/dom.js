import {projectsTable, project} from './projects.js';

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
        changeDom.collapseMenu('collapsed')
    })
})();


//---initiation of add a project button.
//---it adds a new project to project folder
(() => {
    const addProjectSelect = document.querySelector('.panel-item.add-project');

    addProjectSelect.addEventListener('click', () => {
        const project1 = project('personnel');
        project1.addProject(project1);
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
const changeDom = (() => {
    
    const taskTitle = (color, text) => {
        const topTitle = document.querySelector('.main-content__top__title');
        topTitle.style.backgroundColor = color;
        topTitle.innerHTML = text;
    };

    const collapseMenu = (classe) => {
        const leftMenu = document.querySelector('.nav-panel');
        leftMenu.classList.toggle(classe)
    }

    return {
        taskTitle,
        collapseMenu,
    }
})();


