import summary_tmp from './summary.hbs';


const summary = document.querySelector('#summary');
summary.insertAdjacentHTML('beforeend', summary_tmp({'name':'profile'}));