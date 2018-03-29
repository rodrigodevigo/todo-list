class Task {
  constructor (description) {
    this.description = description;
    this.isCompleted = false;
    this.code = 0;
  }

  printInfo () {
    if (this.isCompleted) {
      return this.description + ' - Completada'
    } else {
      return this.description + ' - Não completada'
    }
  }

  complete () {
    this.isCompleted = true;
  }
}
