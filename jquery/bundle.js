  $(document).ready(function () {

            if (localStorage['todos']) {
                var todos = JSON.parse(localStorage['todos']);
            }else {
                var todos = {};
            }
            
            for (var index =0; index < todos.length; index++) {
                var element = todos[index];
                add(element);
                console.log(element);
            }
            
            function add(todo) {
                $("#list").append("<li  class='list-group-item'>  " + todo.todo + "  <a href='#' id='done'>  Done  </a>   <a href='#' id='cancel'>  Cancel</a>"                                             +"</li>");
            }

            function list (todo) {
                todo ={
                    todo: $("#todo").val(),
                    isDone: true,
                };
                add(todo);
                todos.push({
                    todo: $("#todo").val(),
                    isDone: true,
                });
                console.log(todos);
                $("#todo").val("").focus();
                localStorage["todos"] = JSON.stringify(todos);
            }

            $("#delete").click(function () {
                localStorage.clear();
                $("#list").empty();
                todos={};
            });

            $("#todo").keyup(function (e) {
                if(e.keyCode == 13)
                    list(e);
            });

            $("#cancel").live( 'click', function() {
                $(this).parent('li').fadeOut();
                todos.pop();
            });

            $("#done").live( 'click', function() {
                $(this).parent('li').addClass('done');
            });

        });