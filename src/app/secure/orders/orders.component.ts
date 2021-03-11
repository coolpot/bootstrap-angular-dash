import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Response } from 'src/app/interfaces/response';
import { Order } from 'src/app/interfaces/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  lastPage: number;


  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(currentPage: number = 1) {
    this.orderService.all(currentPage).subscribe((res: Response) => {
      this.orders = res.data;
      this.lastPage = res.meta.last_page;
    });
  }

}