
var tasks = new TaskCollection();

var controller = new TaskController(tasks);

var view = new TaskView(controller, tasks);
