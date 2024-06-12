import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../backend/data.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent {
  product: any[] =[];
  constructor(private dataservice :DataService) {}

  ngOnInit() {
    this.getProduct()
   }

  getProduct(){
    this.dataservice.getData().subscribe(res=>{
      this.product = res.data;
    })
  }
}
