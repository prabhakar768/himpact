import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDropdownComponent } from './employee-dropdown/employee-dropdown.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
const routes: Routes = [
  {path:'employee-list', component:EmployeeDropdownComponent },
  {path:'user-detail/:id', component:EmployeeDetailComponent },
  { path: '**', redirectTo: 'employee-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
