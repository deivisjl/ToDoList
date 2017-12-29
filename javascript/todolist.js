/* Module for ToDo List application */
var ToDoList = function () {
    /* add members here */

    /* the task */
    var task = {
        name: ko.observable(),
        description: ko.observable(),
        priority: ko.observable()
    };

    /* array of tasks */
    var tasks = ko.observableArray();

    var addTask = function () {
        console.log("Add task with name: " + task.name());
        tasks.push({
            name: task.name(),
            description: task.description(),
            priority: task.priority(),
            status: ko.observable('new')
        });

        clearTask();
    };

    /* method to clear the task */
    var clearTask = function () {
        task.name(null);
        task.description(null);
        task.priority("1");
    };

    /* method to complete a task */
    var completeTask = function (task) {
        console.log("Completing task with name: " + task.name);
        //set status of task to complete
        task.status('complete');
    };

    /* method to delete task to tasks array */
    var deleteTask = function (task) {
        console.log("Deleting task with name: " + task.name);

        //remove the task from the tasks array
        tasks.remove(task);
    };


    /* method to sort the tasks by priority */
    var sortByPriority = function () {
        console.log("Sorting tasks by priority");
        tasks.sort(
            function(left, right) {
                return left.priority == right.priority ? 0 : (left.priority < right.priority ? -1 : 1)
            });
    };

    /* method to sort the tasks by name */
    var sortByName = function () {
        console.log("Sorting tasks by name");
        tasks.sort(
            function(left, right) {
                return left.name == right.name ? 0 : (left.name < right.name
                    ? -1 : 1)
            });
    };


    var init = function () {
        /* add code to initialize this module */
        ko.applyBindings(ToDoList);
    };

    /* execute the init function when the DOM is ready */
    $(init);
    return {
        /* add members that will be exposed publicly */
        tasks: tasks,
        task: task,
        addTask: addTask,
        deleteTask: deleteTask,
        completeTask: completeTask,
        sortByPriority: sortByPriority,
        sortByName: sortByName
    };



}();








