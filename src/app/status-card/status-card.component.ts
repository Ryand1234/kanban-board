import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent implements OnInit {
  // status: string = ""
  @Input() status: String;
  @Input() title: String;
  @Input() description: String;
  statusClass: String = 'pending'
  constructor() { }
  isActive: Boolean = false
  ngOnInit(): void {
    console.log(this.description)
    this.statusClass = this.status;
    
  }
  
  change() {
    this.isActive = !this.isActive
  }

}
