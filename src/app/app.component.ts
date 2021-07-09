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
      title: 'Do HomeWork',
      status: 'pending',
      description: 'A new Task'
    },
    {
      title: 'Call someone',
      status: 'inprogress',
      description: 'A new Task'
    },
    {
      title: 'Call someone',
      status: 'inprogress',
      description: 'A new Task'
    },
    {
      title: 'Call someone',
      status: 'pending',
      description: 'A new Task'
    },
    {
      title: 'Call someone',
      status: 'completed',
      description: 'A new Task'
    },
    {
      title: 'Call someone',
      status: 'inprogress',
      description: 'A new Task'
    },
    {
      title: 'Call someone',
      status: 'completed',
      description: 'A new Task'
    }
  ]
    inProgressTasks: any
    completeTasks: any
    pendingTasks: any
    
    ngOnInit() {
     this.inProgressTasks  = this.tasks.filter( (e) => e.status === 'inprogress')
     this.completeTasks = this.tasks.filter( (e) => e.status === 'completed')
     this.pendingTasks = this.tasks.filter( (e) => e.status === 'pending')
    }
}
