import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent implements OnInit {
  // status: string = ""
  @Input() status: String;
  @Input() title: String;
  @Input() taskId: Number;
  @Input() description: String;
  @Output() changedStatus: EventEmitter<any> = new EventEmitter<any>();
  statusClass: String = 'pending'
  constructor() { }
  isActive: Boolean = false
  emittedObject: Object = {}
  ngOnInit(): void {
    console.log(this.taskId)
    this.statusClass = this.status;
    
  }
  
  change() {
    this.isActive = !this.isActive
  }

  changeStatus(id, status, newStatus) {
    this.emittedObject = {
      id,
      status,
      newStatus
    }
    this.changedStatus.emit(this.emittedObject)
  }

}
