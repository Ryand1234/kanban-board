import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Kanban Board';
    
    constructor(private service: ApiService) {}

    curTask: any = {}
    totalTasks: number = 0
    inProgressTasks: any
    completeTasks: any
    pendingTasks: any
    showAdd: Boolean = false;
    task: any
    async ngOnInit() {
      this.service.query({'op': 3}).subscribe((res: any)=>{
          this.totalTasks = res.length
          this.inProgressTasks  = res.filter( (e) => e.status === 'inprogress')
          this.completeTasks = res.filter( (e) => e.status === 'completed')
          this.pendingTasks = res.filter( (e) => e.status === 'pending')
        });
          
    }

    toggleAddTask() {
      this.showAdd = !this.showAdd
    }

    async addNewTask (task) {
      this.totalTasks = this.totalTasks + 1
      task.id = this.totalTasks
      this.pendingTasks.push(task);
      this.toggleAddTask()
      this.service.query({'data': task, 'op': 1}).subscribe()
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
