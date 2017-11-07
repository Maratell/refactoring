import education_tmp from './education.hbs';
import {addStyle} from "../../js/addStyle";




addStyle('css/main.css');




const education = document.querySelector('#education');
education.insertAdjacentHTML('beforeend', education_tmp({'name':'education'}));