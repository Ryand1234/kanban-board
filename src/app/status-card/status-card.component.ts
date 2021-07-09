import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent implements OnInit {
  // status: string = ""
  @Input() status: String;
  statusClass: String = 'pending'
  constructor() { }

  ngOnInit(): void {
    console.log(this.status)
    this.statusClass = this.status;
  }

}
