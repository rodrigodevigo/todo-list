class TaskController {
  constructor (model) {
    this.model = model;
  }

  createTask (description) {
    let task = new Task(description);
    this.model.create(task);
  }

  removeTask (code) {
    this.model.delete(code);
  }

  completeTask (code) {
    let task = this.model.find(code);
    task.isCompleted = true;
  }
}
