import './style.css';
import './dom.js';
import './projects.js';
import './local.js';
import { changeDom } from './dom.js';

// add project section to main page at loading
changeDom.initialiseProjects();