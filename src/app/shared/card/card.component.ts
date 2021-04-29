import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  @Input() public permitType: string = '';
  @Input() public workDescription: string = '';
  @Input() public location: any;

  constructor() { }

  ngOnInit(): void {
  }

}
