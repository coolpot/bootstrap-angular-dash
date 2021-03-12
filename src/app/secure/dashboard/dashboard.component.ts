import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Response } from 'src/app/interfaces/response';
import * as c3 from 'c3';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(protected orderService: OrderService) { }

  ngOnInit(): void {
    const chart = c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        columns: [
          ['x'],
          ['Sales']
        ],
        types: {
          Sales: 'bar'
        }
      },
      axis: {
        'x': {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        }
      }
    });

    this.orderService.chart().subscribe((res: Response) => {
      const records = res.data;
      chart.load({
        columns: [
          ['x', ...records.map(r => r.date)],
          ['Sales', ...records.map(r => r.sum)]
        ]
      })
    });
  }

}
