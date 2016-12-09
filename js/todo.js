function newItem() {
	var item = document.getElementById('input').value;
	var ul = document.getElementById("list");
	var li = document.createElement('li');
  var removeBtn = document.createElement('div');
  var completeBtn = document.createElement('div');
  var btnWrapper = document.createElement('div');
  // Adds new item to list
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
   // Adds buttons to each list item
  li.appendChild(btnWrapper).classList.add('btn_wrapper');;
  btnWrapper.appendChild(removeBtn).innerHTML = ('<i class="fa fa-times-circle" aria-hidden="true"></i>');
  btnWrapper.appendChild(completeBtn).innerHTML = ('<i class="fa fa-check-circle" aria-hidden="true"></i>');
  removeBtn.classList.add('delete_item');
  completeBtn.classList.add('completed');
  
  document.getElementById('input').value="";
  removeBtn.onclick = removeItem;
  completeBtn.onclick = markCompleted;
}

document.body.onkeyup = function(e){
  var item = document.getElementById('input').value;
      if(e.keyCode == 13 && item!==""){
        newItem();
      }
  }

  // Mark an item as completed

  function markCompleted(){
var completed = this.parentNode.parentNode;
(completed).classList.toggle('completed_task')
  }
  // Delete an item

    function removeItem() {
var listItem = this.parentNode.parentNode;
var parent = listItem.parentNode;
parent.removeChild(listItem);
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