import skills_tmp from './skills.hbs';


const skills = document.querySelector('#skills');
skills.insertAdjacentHTML('beforeend', skills_tmp({'name':'skills'}));