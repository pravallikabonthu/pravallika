import { Component, OnInit, ViewChild} from '@angular/core';
import{Chart} from 'chart.js';
//import * as Chart from 'chart.js';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.page.html',
  styleUrls: ['./weekly.page.scss'],
})
export class WeeklyPage  {
@ViewChild('barChart') barChart:{ nativeElement: string | CanvasRenderingContext2D | HTMLCanvasElement | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>;};
  
  bars:any;
  colorarray:any;

  constructor() { }
  ionviewDidEnter(){
    this.createBarChart();

  }
  createBarChart() {
    this.bars=new Chart(this.barChart.nativeElement,{
      type:'bar',
      data:{
        labels:['Mon','Tue','Wed','Thu','Fri'],
        datasets:[{
         label:'viewers in millions',
          data:[12,19,3,5,2,],
          backgroundColor:'rgb(0,0,255)',
          borderColor:'rgb(38,194,129)',
          borderWidth:1 
        
        }]
      },
      options:{
        legend:{
          display:false
        },
        scales:{
          yAxes:[{
          
            ticks:{
              beginAtZero: true
            }
          }],
          xAxes:[{
            
            gridLines:{
             display:false
              
              
            }
          }]
        }
      }
    });
  }

  }

  


