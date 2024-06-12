import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../backend/data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export interface sanpham {
  MaSanPham: number,
  TenSanPham: string,
  HinhAnh: string,
  Gia: number,
  GiaKhuyenMai: number,
  MaDanhMuc: number,
  SoLuong: number,
  MoTa: string,
  Hot: number,
  TrangThai: string
}
@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss']
})
export class PlusComponent {
  data: sanpham[] = [];
  newProduct: sanpham = {
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
  }
  formGroup!: FormGroup;
  constructor(private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      TenSanPham: new FormControl('', Validators.required),
      HinhAnh: new FormControl('', Validators.required),
      Gia: new FormControl('', Validators.required),
      GiaKhuyenMai: new FormControl('', Validators.required),
      MaDanhMuc: new FormControl('', Validators.required),
      SoLuong: new FormControl('', Validators.required),
      TrangThai: new FormControl('', Validators.required),
      MoTa:new FormControl('',Validators.required)

    })
  }


  addProduct() {
    this.dataService.addData(this.newProduct).subscribe(res => {
      this.data.push(this.newProduct);
      console.log(this.newProduct);
      this.router.navigateByUrl('/pages/manage');

    });
  }

  onSubmit() {
    if (this.formGroup.invalid) { return; }
    if (this.formGroup.valid) {
      this.addProduct();
    }
  }


}
