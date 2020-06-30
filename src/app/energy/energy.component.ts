/**
 * Created by h on 6/30/2020.
 */
import {OnInit, Component} from '@angular/core';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html'
})
export class EnergyComponent implements OnInit{
  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getData().subscribe(
      (response) => console.log('response---', response),
      (error) => console.log('error---', error)
    );
  }
  totalEnergy = 1000;
  electricity = '256';
  water = '200';
  gas = '150';
  solar = '100';
  co2 = '50';


}
