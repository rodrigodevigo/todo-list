
var tasks = [];

var taskButton = document.querySelector("#taskbutton");

var task_render = function(task, index) {
  var item = '<div class="grid_12 task_container">' +
    '<div class="task">' +
    '  <p>'+task.printInfo()+'</p>'+
    '</div>'+
    '<div class="task_action">'+
      '<button type="button" data-id="'+task.code+'" name="button">Completado ?</button>'+
    '</div>'+
  '</div>';
  taskList += item;
}


taskButton.onclick = function (event) {
  let task = document.querySelector("#taskfield").value;
  taskObj = new Task(tasks.length, task);
  tasks.push(taskObj);
  taskList = '';
  var taskListObj = document.querySelector("#tasklist");
  tasks.forEach (task_render);
  console.log(taskList);
  taskListObj.innerHTML = taskList;
};
