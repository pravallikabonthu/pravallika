import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import{Chart} from 'chart.js';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {

  @ViewChild('dailystatus',{static:true})dailystatus: ElementRef;
  private dailystatusChart:Chart

  ngOnInit() {
    this.dailystatusChart = new Chart(this.dailystatus.nativeElement, {
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
                  rotation: 1 * Math.PI,
                  circumference: 1 * Math.PI,
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
