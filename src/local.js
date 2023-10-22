import {projectsTable} from './projects.js';

//---Save the array of projects to localStorage
export const localMethods = (() => {

  const saveToLocale = () => {
    localStorage.setItem('data', JSON.stringify(projectsTable));
}
  return {
    saveToLocale
  }
})();