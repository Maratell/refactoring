export var Controller = function(wr, painter) {
    var model,
        view;

    class Controller {
        constructor(wr, painter) {
            model = wr;
            view = painter;
        }

        listen() {
            var elements = document.getElementsByTagName("td");
            for (var i = 0; i < elements.length; i++) {
                elements[i].onclick = function() {
                    var childId = this.id;
                    var parentId = this.parentElement.id;
                    var mas = model.getField();

                    mas[childId][parentId].is_live = (mas[childId][parentId].is_live === 1) ? 0 : 1;
                    model.applyGeneration(mas);
                    view.update(model.getField());
                }
            }
        }
    }

    return new Controller(wr, painter);
}