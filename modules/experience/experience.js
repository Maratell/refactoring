import experience_tmp from './experience.hbs';

var tag_css = document.createElement('link');
tag_css.rel = 'stylesheet';
tag_css.href = 'css/main2.css'; // здесь указывается URL стилевого файла
tag_css.type = 'text/css';
var tag_head = document.getElementsByTagName('head');
tag_head[0].appendChild(tag_css);




const experience = document.querySelector('#experience');
experience.insertAdjacentHTML('beforeend', experience_tmp({'name':'experience'}));