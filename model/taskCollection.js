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
    // Ache o indice da tarefa cujo código é igual ao code e então use o splice
    // nesse indice
    this.data.splice(code, 1);
    return this;
  }
};
