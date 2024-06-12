import { Component } from '@angular/core';
import { DataService } from '../../../../backend/data.service';
@Component({
  selector: 'app-manage-nv',
  templateUrl: './manage-nv.component.html',
  styleUrls: ['./manage-nv.component.scss']
})
export class ManageNVComponent {
  data: any[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.dataService.getDataNV().subscribe(res => {
      this.data = res.data;
      console.log(this.data);
    });
  }
  deleteEmployee(MaNhanVien: number) {
    this.dataService.ondeleteData(MaNhanVien).subscribe(res => {
      this.data = this.data.filter(employee => employee.MaNhanVien !== MaNhanVien);
    })
  }

}