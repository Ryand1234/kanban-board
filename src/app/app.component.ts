import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service'
import { Itask } from 'src/app/task'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
    title = 'Kanban Board';

    constructor(private service: ApiService) {}

    curTask: Itask
    totalTasks: number = 0
    inProgressTasks: Array<Itask>
    completeTasks: Array<Itask>
    pendingTasks: Array<Itask>
    tempTask: Array<Itask>
    showAdd: Boolean = false;
    op: Number
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
      if (status === 'pending') {
        this.tempTask = this.pendingTasks.filter(e => e.id == id)
        this.pendingTasks = this.pendingTasks.filter(e => e.id != id)
      } else if (status === 'inprogress') {
        this.tempTask = this.inProgressTasks.filter(e => e.id == id)
        this.inProgressTasks = this.inProgressTasks.filter(e => e.id != id)
      } else {
        this.tempTask = this.completeTasks.filter(e => e.id == id)
        this.completeTasks = this.completeTasks.filter(e => e.id != id)
      }
      this.curTask = this.tempTask[0]
      this.curTask.status = newStatus
      this.op = 2;
      switch(newStatus) {
        case 'pending': this.pendingTasks.push(this.curTask); break;
        case 'inprogress': this.inProgressTasks.push(this.curTask); break;
        case 'completed': this.completeTasks.push(this.curTask); break;
        default: this.op = 4;
      }
      this.service.query({'data': this.curTask, 'op': this.op}).subscribe();
    }
}
