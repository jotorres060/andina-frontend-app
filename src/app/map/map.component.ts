import { Component, Input, OnInit } from '@angular/core';

import { environment } from '../../environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public map: Mapboxgl.Map;
  public style: string = 'mapbox://styles/mapbox/streets-v11';
  public zoom: number = 11;

  @Input() public lat: number;
  @Input() public lng: number;

  constructor() {
    (Mapboxgl as any).accessToken = environment.mapBoxApiKey;
  }

  ngOnInit(): void {
    this.createMap();
    this.setMarker();
  }

  public createMap(): void {
    this.map = new Mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: [this.lng, this.lat],
      zoom: this.zoom
    });

    this.map.addControl(new Mapboxgl.NavigationControl());
  }

  public setMarker(): void {
    new Mapboxgl.Marker()
    .setLngLat([this.lng, this.lat])
    .addTo(this.map);
  }

}
