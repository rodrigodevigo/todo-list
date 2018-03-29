class TaskView {
  constructor (controller) {
    this.controller = controller;
    this.button = document.querySelector("#taskbutton");
    this.field = document.querySelector("#taskfield");
    this.
  }

  createTask () {
    this.controller.createTask(this.field.value);
    this.render();
  }

  render

}
