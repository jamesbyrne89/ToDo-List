function newItem() {
	var ul = document.getElementById("list");
	var li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
  document.getElementById('input').value="";
  li.onclick = removeItem;

}

document.body.onkeyup = function(e){
  var item = document.getElementById('input').value;
      if(e.keyCode == 13 && item!==""){
        newItem();
        console.log(item);
      }
  }

    function removeItem(e) {
     e.target.parentElement.removeChild(e.target);
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