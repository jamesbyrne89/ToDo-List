const list = document.getElementById('list');
const input = document.getElementById('input');


// Creates a generic task

function task(){
  task.container = document.createElement('li');
  task.taskName =  input.value;
  task.removeBtn = document.createElement('button');
  task.completeBtn = document.createElement('button');
  task.btnWrapper = document.createElement('div');
  task.taskName;
}

// Adds new item to list

function addItemToList(){
 new task();
 list.appendChild(task.container);
 this.taskName = document.createTextNode(input.value);
 task.container.appendChild(this.taskName);
 console.log(task.container);
  input.value="";

  

   // Adds buttons to each list item
var btnWrapper = document.createElement('div');
btnWrapper.className = 'btn_wrapper';
  btnWrapper.innerHTML = (`<button id="delete_item" class="delete_item"><i class="fa fa-times-circle" aria-hidden="true"></i></button>
   <button id="completed" class="completed"><i class="fa fa-check-circle" aria-hidden="true"></i></button>`);
task.container.appendChild(btnWrapper);
}  
 

  
//removeBtn.onclick = removeItem;
//completeBtn.addEventListener('click', markCompleted);

document.body.onkeyup = function(e){
  
      if(e.keyCode == 13 && input.value!==""){
        console.log("item = " + input.value);
        task();
        addItemToList();
      }
  }

  // Mark an item as completed

  function markCompleted(){
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
   