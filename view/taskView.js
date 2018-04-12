class TaskView {
  constructor (controller, model) {
    this.button = document.querySelector('#taskbutton');
    this.field = document.querySelector('#taskfield');
    this.list = document.querySelector('#tasklist');
    this.controller = controller;
    this.model = model;
    this.button.onclick = this.createTask.bind(this);
  }

  createTask () {
    if (this.field.value == '') {
      alert("Descrição vazia");
    } else {
      this.controller.createTask(this.field.value);
      this.show();
    }

  }

  removeTask (code) {
    this.controller.removeTask(code);
    this.show();
  }

  completeTask (code) {
    this.controller.completeTask(code);
    this.show();
  }

  show () {
    this.list.innerHTML = '';
    for (var i = 0; i < this.model.data.length; i++ ) {
      var task = this.model.data[i];
      this.list.innerHTML += '<div class="grid_12 task_container">' +
        '<div class="task">' +
        '  <p>'+task.printInfo()+'</p>'+
        '</div>'+
        '<div class="task_action">'+
        '<button type="button" data-id="'+task.code+'" onclick="view.removeTask('+task.code+')" name="completeButton">Remover</button>'+
          '<button type="button" data-id="'+task.code+'" onclick="view.completeTask('+task.code+')" name="completeButton">Completado ?</button>'+
        '</div>'+
      '</div>';
    }
  }
}
