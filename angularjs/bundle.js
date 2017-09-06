var app = angular.module('myApp', []); 

app.controller('todoCtrl',function ($scope) {
    

    $scope.todos = [];

    $scope.addTodo =  () => {
        if($scope.todo != ""){
            $scope.todos.push({todo:$scope.todo,done:false});
            $scope.todo="";
            console.log($scope.todos);
        }
    }

    $scope.deleteAllTodos = () => {
        var oldList = $scope.todos;
        $scope.todos=[];
        angular.forEach(oldList,function(todo) {
            if(!todo.done)
                $scope.todos.push(todo);
        }, this);
    };

  

});