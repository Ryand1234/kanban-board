import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() hideAddTask: EventEmitter<any> = new EventEmitter<any>()
  @Output() addTask: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }
  currentTask: any = {
    description: '',
    status: 'pending',
    title: ''
  }
  ngOnInit(): void {
  }

  hide() {
    this.hideAddTask.emit()
  }

  add() {
    console.log('Add task')
    this.addTask.emit(this.currentTask)
  }

}
