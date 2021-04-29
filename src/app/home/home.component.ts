import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public data: any[] = [];
  public loading: boolean = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loading = true;
    this.dataService.getData().subscribe((data: any) => {
      this.data = data['data'];
      this.loading = false;
    });
  }

}
