import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.all().subscribe((res: Response) => {
      this.products = res.data;
    });
  }

  delete(id: number) {
    if(confirm('Are you sure you want to delete this record?')) {
      this.productService.delete(id).subscribe(res => {
        this.products = this.products.filter(p => p.id !== id);
      });
    }
  }
}
