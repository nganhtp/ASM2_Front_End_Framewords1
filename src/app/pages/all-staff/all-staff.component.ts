import { Component } from '@angular/core';
import { DataService } from '../../../../backend/data.service';

@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.scss']
})
export class AllStaffComponent {
  data: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.dataService.getDataNV().subscribe(res => {
      this.data = res.data;
      console.log(this.data);
    });
  }
}