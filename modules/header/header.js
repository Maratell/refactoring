import header_tmp from './header.hbs';


const header = document.querySelector('#header');
header.insertAdjacentHTML('beforeend', header_tmp({
    'name' : 'name here',
    'surname':'surname',
    'profession' : 'graphic designer'
}));