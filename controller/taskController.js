class TaskController {
  constructor (model) {
    this.model = model;
  }

  createTask (description) {
    let task = new Task(description);
    this.model.create(task);
  }
}
