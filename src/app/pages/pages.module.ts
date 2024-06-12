import {NgModule} from '@angular/core';
import {NbMenuModule} from "@nebular/theme";
import {ThemeModule} from '../@theme/theme.module';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PaginatorModule} from "../@theme/components/paginator/paginator.module";
import { ManageComponent } from './manage/manage.component';
import { PlusComponent } from './plus/plus.component';
import { ManageNVComponent } from './manage-nv/manage-nv.component';
import { PlusNvComponent } from './plus-nv/plus-nv.component';
import { AllProductComponent } from './all-product/all-product.component';
import { AllStaffComponent } from './all-staff/all-staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { DetailNvComponent } from './detail-nv/detail-nv.component';
import { EditNvComponent } from './edit-nv/edit-nv.component';

@NgModule({
  imports: [
    FormsModule,
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    NbMenuModule,
    PaginatorModule,
    ReactiveFormsModule
    
  ],
  declarations: [
    PagesComponent,
    ManageComponent,
    PlusComponent,
    ManageNVComponent,
    PlusNvComponent,
    AllProductComponent,
    AllStaffComponent,
    EditComponent,
    DetailsComponent,
    DetailNvComponent,
    EditNvComponent,
  ],
  providers: []
})
export class PagesModule { }
