class TaskView {
  constructor (controller, model) {
    this.controller = controller;
    this.model = model;
    this.button = document.querySelector("#taskbutton");
    this.field = document.querySelector("#taskfield");
    this.list = document.querySelector("#tasklist");
    this.initHandler();
  }

  initHandler () {
    this.button.onclick = this.createTask.bind(this);
  }

  createTask () {
    this.controller.createTask(this.field.value);
    this.render();
  }

  completeTask (code) {
    this.controller.completeTask(code);
    this.render();
  }

  removeTask (code) {
    this.controller.removeTask(code);
    this.render();
  }

  render() {
    this.list.innerHTML = '';
    for (var i = 0; i < this.model.data.length; i++) {
      var task = this.model.data[i];
      this.list.innerHTML += '<div class="grid_12 task_container">' +
        '<div class="task">' +
        '  <p>'+task.printInfo()+'</p>'+
        '</div>'+
        '<div class="task_action">'+
          '<button type="button" data-id="'+task.code+'" onclick="view.completeTask('+task.code+')" name="completeButton">Completado ?</button>'+
          '<button type="button" data-id="'+task.code+'" onclick="view.apagar('+task.code+')" name="completeButton">Remover</button>'+
        '</div>'+
      '</div>';
    }
  }

}
