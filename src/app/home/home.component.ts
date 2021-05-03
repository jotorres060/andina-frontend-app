import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { environment } from '../../environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public data: any[] = [];
  public loading: boolean = true;
  public map?: Mapboxgl.Map;
  public style: string = 'mapbox://styles/mapbox/streets-v11';
  public lat: number = 40;
  public lng: number = -74.5;
  public zoom: number = 9;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loading = true;
    this.dataService.getData().subscribe((data: any) => {
      this.data = data['data'];
      this.loading = false;

      // (Mapboxgl as any).accessToken = environment.mapBoxApiKey;
      // this.map = new Mapboxgl.Map({
      //   container: 'map-mapbox',
      //   style: this.style,
      //   center: [this.lng, this.lat],
      //   zoom: this.zoom
      // });
    });
  }

}
