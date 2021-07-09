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
      status: 'pending'
    },
    {
      title: 'Call someone',
      status: 'inprogress'
    },
    {
      title: 'Call someone',
      status: 'inprogress'
    },
    {
      title: 'Call someone',
      status: 'pending'
    },
    {
      title: 'Call someone',
      status: 'completed'
    },
    {
      title: 'Call someone',
      status: 'inprogress'
    },
    {
      title: 'Call someone',
      status: 'completed'
    }
  ]
    inProgressTasks: any
    completeTasks: any
    pendingTasks: any
    // console.log('C: ', this.pendingTasks)
    ngOnInit() {
     this.inProgressTasks  = this.tasks.filter( (e) => e.status === 'inprogress')
     this.completeTasks = this.tasks.filter( (e) => e.status === 'completed')
     this.pendingTasks = this.tasks.filter( (e) => e.status === 'pending')
    }
}
