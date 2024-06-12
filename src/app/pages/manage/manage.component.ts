import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../backend/data.service';
import { sanpham } from '../plus/plus.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.dataService.getData().subscribe(res => {
      this.data = res.data;
      console.log(this.data);
    });
  }

  deleteProduct(MaSanPham: number) {
    this.dataService.deleteData(MaSanPham).subscribe(res => {
      this.data = this.data.filter(item => item.MaSanPham !== MaSanPham);
    });
  }
}
