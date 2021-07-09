import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Kanban Board';
  tasks = [
    {
      id: 1,
      title: 'Do HomeWork',
      status: 'pending',
      description: 'A new Task'
    },
    {
      id: 2,
      title: 'Call someone',
      status: 'inprogress',
      description: 'A new Task'
    },
    {
      id: 3,
      title: 'Call someone',
      status: 'inprogress',
      description: 'A new Task'
    },
    {
      id: 4,
      title: 'Call someone',
      status: 'pending',
      description: 'A new Task'
    },
    {
      id: 5,
      title: 'Call someone',
      status: 'completed',
      description: 'A new Task'
    },
    {
      id: 6,
      title: 'Call someone',
      status: 'inprogress',
      description: 'A new Task'
    },
    {
      id: 7,
      title: 'Call someone',
      status: 'completed',
      description: 'A new Task'
    }
  ]
    curTask: any = {}
    inProgressTasks: any
    completeTasks: any
    pendingTasks: any
    showAdd: Boolean = true;

    ngOnInit() {
     this.inProgressTasks  = this.tasks.filter( (e) => e.status === 'inprogress')
     this.completeTasks = this.tasks.filter( (e) => e.status === 'completed')
     this.pendingTasks = this.tasks.filter( (e) => e.status === 'pending')
    }

    toggleAddTask() {
      this.showAdd = !this.showAdd
    }

    addNewTask (task) {
      this.pendingTasks.push(task);
      this.toggleAddTask()
    }

    statusChanged({id, status, newStatus}) {
      this.curTask = {}
      if (status === 'pending') {
        this.curTask = this.pendingTasks.filter(e => e.id == id)
        this.pendingTasks = this.pendingTasks.filter(e => e.id != id)
      } else if (status === 'inprogress') {
        this.curTask = this.inProgressTasks.filter(e => e.id == id)
        this.inProgressTasks = this.inProgressTasks.filter(e => e.id != id)
      } else {
        this.curTask = this.completeTasks.filter(e => e.id == id)
        this.completeTasks = this.completeTasks.filter(e => e.id != id)
      }
      this.curTask = this.curTask[0]
      this.curTask.status = newStatus
      switch(newStatus) {
        case 'pending': this.pendingTasks.push(this.curTask); break;
        case 'inprogress': this.inProgressTasks.push(this.curTask); break;
        case 'completed': this.completeTasks.push(this.curTask); break;
      }

    }
}
