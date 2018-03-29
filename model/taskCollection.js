class TaskCollection {
  constructor () {
    this.name = 'tasks';
    this.data = [];
  }

  create (task) {
    task.code = this.data.length;
    this.data.push(task);
    return this;
  }

  find (code) {
    return this.data.find(function(task) {
      return task.code == code;
    });
  }

  delete (code) {
    this.data.push(task);
    return this;
  }
};
