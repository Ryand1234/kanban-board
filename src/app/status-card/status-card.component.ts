import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent implements OnInit, AfterViewInit {
  // status: string = ""
  @ViewChild('.dropdown') dropdown: ElementRef;
  @Input() status: String;
  @Input() title: String;
  statusClass: String = 'pending'
  constructor() { }

  ngOnInit(): void {
    console.log(this.status)
    this.statusClass = this.status;
  }

  ngAfterViewInit() {
    console.log(this.dropdown)
  }

  // dropdown: any = document.getElementById('.dropdown')
  // this.dropdown.addEventListener('click', (e) => {
  //   e.stopPropagation();
  //   this.dropdown.classList.toggle('is-active');
  // })
}
