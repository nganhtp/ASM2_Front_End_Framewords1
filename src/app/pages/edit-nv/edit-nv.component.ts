import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../../backend/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-nv',
  templateUrl: './edit-nv.component.html',
  styleUrls: ['./edit-nv.component.scss']
})
export class EditNvComponent implements OnInit{
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
      this.getEdit();
   
  }
  getEdit(){
    this.router.params.subscribe(params =>{
      this.getId.getDataById(params.MaNhanVien).subscribe(res =>{
        this.datas = res.data;
      })
    })
  }
  editEmployee(){
    this.getId.putEmployee(this.datas,this.datas.MaNhanVien).subscribe(res =>{
      this.Router.navigateByUrl("/pages/manage-nv");
    })
  }
}
