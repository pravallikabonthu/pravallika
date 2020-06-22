import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import{Chart} from 'chart.js';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.page.html',
  styleUrls: ['./hourly.page.scss'],
})
export class HourlyPage implements OnInit {
  @ViewChild('hourlystatus',{static:true}) hourlystatus:ElementRef;
  private hourlystatusChart:Chart;

  constructor() { }

  ngOnInit() {
    this.hourlystatusChart = new Chart(this.hourlystatus.nativeElement, {
      type: 'doughnut',
              data: {
                  labels: ["Green","Amber","Alert"],
                  datasets: [
                      {
                          backgroundColor: ["rgb(160, 241, 160)","orange","red"],
                          data: [98,94,90,120],
                      }
                  ]
                },
                options: {
                  cutoutPercentage: 75,
                  rotation: Math.PI * 0.5,
                  legend: {
                      display: true,
                      position: 'bottom',
                      align: 'center',
                      fullWidth: true,
                  },
              }
            });
  
  }
  }
