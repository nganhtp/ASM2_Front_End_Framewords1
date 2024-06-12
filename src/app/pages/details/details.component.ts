import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../backend/data.service';
import { ActivatedRoute } from '@angular/router';
import { sanpham } from '../plus/plus.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  posts: sanpham;
  constructor(private dataservice: DataService,
    private Activated: ActivatedRoute
  ) { }
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.Activated.params.subscribe(params => {
      this.dataservice.editData(params.MaSanPham).subscribe(res => {
        this.posts = res.data;
        console.log(this.posts.TenSanPham)
      })
    })


  }
}
