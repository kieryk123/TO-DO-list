
      //funkcja dodająca zadanie
      function addNewTask() {
        //przechowuje zawartość inputa
				var taskValue = $('#task-value').val();
        if (taskValue != '') {
          $('#task-list').append('<li class="task">'+taskValue+'<input class="done-btn pull-left" type="checkbox"><a class="remove-btn pull-right"><i class="fa fa-minus" aria-hidden="true"></i></a></li>');
          //czyści input
          $('#task-value').val('');
        } else {
          alert("You can't add task without name!");
        }
      }

      //dodaje zadanie po wcisnięciu enter
      $('#task-value').on('keypress', function(e) {
        if (e.keyCode == 13) addNewTask();
      });

      //dodaje zadanie po kliknięciu przycisku
      $('#add-task').on('click', function() {
        addNewTask();
      });

      //usuwa rodzica aktualnie klikniętego buttona
      $('#task-list').on('click', '.remove-btn', function() {
  			$(this).parent().remove();
  		});

      //zaznacza zrobione zadanie
      $('#task-list').on('click', '.done-btn', function() {
  			$(this).parent().toggleClass('done');
  		});
