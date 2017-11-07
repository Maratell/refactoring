export var addStyle = function(path) {
    var tag_css = document.createElement('link');
    tag_css.rel = 'stylesheet';
    tag_css.href = path; // здесь указывается URL стилевого файла
    tag_css.type = 'text/css';
    var tag_head = document.getElementsByTagName('head');
    tag_head[0].appendChild(tag_css);
}