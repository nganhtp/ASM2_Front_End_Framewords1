import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../backend/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail-nv',
  templateUrl: './detail-nv.component.html',
  styleUrls: ['./detail-nv.component.scss']
})
export class DetailNvComponent implements OnInit {
  datas: any ={
    Email:'',
    MatKhau:'', 
    HoTen:'',
    DiaChi:'',
    SDT: '',
    Admin:'',
    Anh: '',
    ChucVu:'',
    LyLich:''
  }
  constructor(
    private router: ActivatedRoute,
    private getId: DataService,
    private Router: Router
  ){}
  ngOnInit(): void {
      this.getDetail();
  }
  getDetail(){
    this.router.params.subscribe(params =>{
      this.getId.getDataById(params.MaNhanVien).subscribe(res =>{
        this.datas = res.data;
      })
    })
  }

}