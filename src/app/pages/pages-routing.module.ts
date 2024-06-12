import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManageComponent } from './manage/manage.component';
import { ManageNVComponent } from './manage-nv/manage-nv.component';
import { PlusComponent } from './plus/plus.component';
import { PlusNvComponent } from './plus-nv/plus-nv.component';
import { AllProductComponent } from './all-product/all-product.component';
import { AllStaffComponent } from './all-staff/all-staff.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { DetailNvComponent } from './detail-nv/detail-nv.component';
import { EditNvComponent } from './edit-nv/edit-nv.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: { breadcrumb: 'Điều khiển' },
    },
    {
      path: 'manage',
      component: ManageComponent,
      data: { breadcrumb: 'Quản lý sản phẩm' }
    },
    {
      path: 'manage-nv',
      component: ManageNVComponent,
      data: { breadcrumb: 'Quản lý nhân viên' }
    },
    {
      path: 'plus',
      component: PlusComponent,
      data: { breadcrumb: 'Thêm sản phẩm' }
    },
    {
      path: 'plus-nv',
      component: PlusNvComponent,
      data: { breadcrumb: 'Thêm nhân viên' }
    },
    {
      path: 'all-product',
      component: AllProductComponent,
      data: { breadcrumb: 'Tất cả sản phẩm' }
    },
    {
      path: 'all-staff',
      component: AllStaffComponent,
      data: { breadcrumb: 'Tất cả nhân viên' }
    },
    {
      path: 'edit/:MaSanPham',
      component: EditComponent,
      data: { breadcrumb: 'Sửa sản phẩm' }
    },
    {
      path: 'details/:MaSanPham',
      component: DetailsComponent,
      data: { breadcrumb: 'Chi tiết sản phẩm' }
    },
    {
      path: 'detail-nv/:MaNhanVien',
      component: DetailNvComponent,
      data: { breadcrumb: 'Thông tin' }
    },
    {
      path: 'edit-nv/:MaNhanVien',
      component: EditNvComponent,
      data: {breadcrumb:'cập nhật nhân viên'}
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
