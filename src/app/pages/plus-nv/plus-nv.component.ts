import { Component } from '@angular/core';
import { DataService } from '../../../../backend/data.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-plus-nv',
  templateUrl: './plus-nv.component.html',
  styleUrls: ['./plus-nv.component.scss']
})
export class PlusNvComponent {
  datas: any[] = [];
  newData: any = {
    MaNhanVien: '',
    Email: '',
    MatKhau: '',
    HoTen: '',
    DiaChi: '',
    SDT: '',
    Admin: '',
    Anh: '',
    ChucVu: '',
    LyLich: ''
  }
  constructor(
    private dataService: DataService,
    private Router: Router
  ) { }

  ngOnInit(): void {
  }
  postEmployee() {
    this.dataService.postEmployee(this.newData).subscribe(res => {
      this.datas.push(res.data);
      this.Router.navigateByUrl("/pages/manage-nv");
     
    })
  }
  
  
}