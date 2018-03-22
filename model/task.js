class Task {
  constructor (code, description) {
    this.description = description;
    this.isCompleted = false;
    this.code = code;
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
