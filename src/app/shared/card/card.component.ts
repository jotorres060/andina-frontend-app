import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  @Input() public permitType: string = '';
  @Input() public workDescription: string = '';
  @Input() public coordinates: number[];

  @Output() onClick: EventEmitter<number[]>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public viewLocation(coordinates: number[]): void {
    this.onClick.emit(coordinates);
  }

}
