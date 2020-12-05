// Arrays to keep track of each task's state
function newTask (title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    markCompleted: function() {
      this.complete = true;
    },

    logState: function() {
      console.log(`${this.title} has${this.complete ? " ": " not "}been completed`);
    }
  };
  return task;
}


// DRIVER CODE BELOW

const taskA = newTask("Clean Cat Litter", "Take all the $!@@ out of the litter box");
const taskB = newTask("Do Laundry", "Do them in 2 separate batches");
taskA.logState();
taskA.markCompleted();
taskA.logState();


