
var tasks = new TaskCollection();

var controller = new TaskController(tasks);

var taskButton = document.querySelector("#taskbutton");

var task_render = function(task, index) {
  var item = '<div class="grid_12 task_container">' +
    '<div class="task">' +
    '  <p>'+task.printInfo()+'</p>'+
    '</div>'+
    '<div class="task_action">'+
    '<button type="button" data-id="'+task.code+'" onclick="removeTask('+task.code+')" name="completeButton">Remover</button>'+
      '<button type="button" data-id="'+task.code+'" onclick="completeTask('+task.code+')" name="completeButton">Completado ?</button>'+
    '</div>'+
  '</div>';
  taskList += item;
}

function completeTask (code) {
  controller.completeTask(code);
  taskList = '';
  var taskListObj = document.querySelector("#tasklist");
  tasks.data.forEach (task_render);
  taskListObj.innerHTML = taskList;
}

function removeTask (code) {
  controller.removeTask(code);
  taskList = '';
  var taskListObj = document.querySelector("#tasklist");
  tasks.data.forEach (task_render);
  taskListObj.innerHTML = taskList;
}


taskButton.onclick = function (event) {
  let description = document.querySelector("#taskfield").value;
  controller.createTask(description);
  taskList = '';
  var taskListObj = document.querySelector("#tasklist");
  tasks.data.forEach (task_render);
  taskListObj.innerHTML = taskList;
};
