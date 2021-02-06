//javascript amboxj

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("-");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("-");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}




// jquery kista 






// $(document).ready(function(){
	
// $('form').submit(function(){
// 	if ($('.input').val() !== '') {
// 		var newTask = $('.input').val();
// 		var newLi = $('<li>' + newTask + '</li>');
// 		newLi.on('click', function(){
//          $(this).toggle();
// 		});
// 		$('ul').prepend(newLi);
// 		$('.input').val('');
// 		return false;
// 	}
// });
// });


// $(document).ready(function(){
	
// $('form').submit(function(){
// 	if ($('.input').val() !== '') {
// 		var newTask = $('.input').val();
// 		var newLi = $('<li>' + newTask + '</li>');
// 		newLi.on('click', function(){
//          $(this).toggle();
// 		});
// 		$('ul').prepend(newLi);
// 		$('.input').val('');
// 		return false;
// 	}
// });
// });



$(document).ready(function(){
	$(function(){
		var $tasksList = $('#tasksList');
		var $taskInput = $('#taskInput');
		var $notification = $('#notification');

		var displayNotification = function(){
			if (!$tasksList.children().length) {
				$notification.fadeIn('fast')
			}else {
				$notification.css('display', 'none')
			}
		}

		$('#taskAdd').on("click", function() {
			if(!$taskInput.val()) {return false;}
          $tasksList.append("<li>" + $taskInput.val() + "button class='delete'>&#10006</button></li> ")

          $taskInput.val('');

          displayNotification();

          $('.delete').on('click', function(){
           var $parent = $(this).parent();

           $parent.css("animation", "fadeOut .3s linear")

           setTimeout(function(){
           	$parent.remove();
           	displayNotification()
           }, 1000)
          });


		});
	});




});