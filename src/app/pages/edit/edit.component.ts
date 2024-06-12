import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../backend/data.service';
import { sanpham } from '../plus/plus.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private dataservice: DataService,
    private Activated: ActivatedRoute,
    private Router: Router


  ) { }
  formGroup!: FormGroup;

  posts: sanpham = {
    MaSanPham: null,
    TenSanPham: null,
    HinhAnh: null,
    Gia: null,
    GiaKhuyenMai: null,
    MaDanhMuc: null,
    SoLuong: null,
    MoTa: null,
    Hot: 0,
    TrangThai: null
  };

  ngOnInit() {
    this.getData();
    this.formGroup = new FormGroup({
      TenSanPham: new FormControl('', Validators.required),
      HinhAnh: new FormControl('', Validators.required),
      Gia: new FormControl('', Validators.required),
      GiaKhuyenMai: new FormControl('', Validators.required),
      MaDanhMuc: new FormControl('', Validators.required),
      SoLuong: new FormControl('', Validators.required),
      TrangThai: new FormControl('', Validators.required)
    })

  }
  getData() {
    this.Activated.params.subscribe(params => {
      this.dataservice.editData(params.MaSanPham).subscribe(res => {
        this.posts = res.data;
      })
    })
  }
  editData(){
    this.dataservice.putData(this.posts,this.posts.MaSanPham).subscribe(res =>{
      this.Router.navigateByUrl("/pages/manage");
  })
  }
}