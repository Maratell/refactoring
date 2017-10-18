import experience_tmp from './experience.hbs';


const experience = document.querySelector('#education');
experience.insertAdjacentHTML('beforeend', experience_tmp({'name':'experience'}));