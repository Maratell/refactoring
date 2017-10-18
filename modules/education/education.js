import education_tmp from './education.hbs';


const education = document.querySelector('#education');
education.insertAdjacentHTML('beforeend', education_tmp({'name':'education'}));