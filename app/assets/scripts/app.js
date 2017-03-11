const list = document.getElementById('list');
const input = document.getElementById('input');


// Creates a generic task

var newTask = function() {

  // Create elements
  var listItem = document.createElement('li');
  var taskName = input.value;

  // Create buttons
  var buttons = create('div', 'btn_wrapper');
  var removeBtn = create('button', 'delete_item');
  var completedBtn = create('button', 'completed');

  removeBtn.innerHTML = '<i class="fa fa-times-circle" aria-hidden="true"></i>'
  completedBtn.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';

  // Add all elements to HTML
  list.appendChild(listItem);
  listItem.innerText = taskName;
  buttons.appendChild(removeBtn);
  buttons.appendChild(completedBtn);
  listItem.appendChild(buttons);

  removeBtn.addEventListener('click', deleteTask);

  function addToLocalStorage() {
    var someVar = taskName;
    localStorage.setItem(someVar, someVar);
  }
  addToLocalStorage()
  input.value = "";
};

function create(el, elClass) {
  var element = document.createElement(el);
  element.className = elClass;
  return element;
}


function deleteTask(event) {

  var task = this.parentNode.parentNode;
  var taskName = (task.innerText).trim();
  localStorage.removeItem(taskName);
  var parent = task.parentNode;
  parent.removeChild(task);
}



//removeBtn.onclick = removeItem;
//completeBtn.addEventListener('click', markCompleted);

document.body.onkeyup = function(e) {
  if (e.keyCode == 13 && input.value !== "") {
    newTask();
  }
}

// Mark an item as completed

function markCompleted() {
  var completed = this.parentNode.parentNode;
  (completed).classList.toggle('completed_task')
}

// Delete an item

function removeItem() {
  //var listItem = this.parentNode.parentNode;
  //var parent = listItem.parentNode;
  //parent.removeChild(listItem);
  console.log(this)
}

// Get date

var days = new Array(7);
days[0] = "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";

var months = new Array(12);
months[0] = "Jan";
months[1] = "Feb";
months[2] = "Mar";
months[3] = "Apr";
months[4] = "May";
months[5] = "Jun";
months[6] = "Jul";
months[7] = "Aug";
months[8] = "Sep";
months[9] = "Oct";
months[10] = "Nov";
months[11] = "Dec";

var current_date = new Date();
month_value = current_date.getMonth();
date_value = current_date.getDate();
day_value = current_date.getDay();
year_value = current_date.getFullYear();

document.getElementById('date').innerHTML = (date_value);
document.getElementById('month').innerHTML = (months[month_value]);
document.getElementById('year').innerHTML = (year_value);
document.getElementById('day').innerHTML = (days[day_value]);