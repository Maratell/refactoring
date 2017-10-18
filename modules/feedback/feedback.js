import feedback_tmp from './feedback.hbs';


const feedback = document.querySelector('#feedback');
feedback.insertAdjacentHTML('beforeend', feedback_tmp({'name':'contact'}));