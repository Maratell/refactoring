import software_tmp from './software.hbs';


const software = document.querySelector('#software');
software.insertAdjacentHTML('beforeend', software_tmp({'name':'software'}));