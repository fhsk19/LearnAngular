import { LogComponent } from './log/log.component';
import { EmpcalcComponent } from './empcalc/empcalc.component';
import { TemplateComponent } from './template/template.component';
import { EmplistComponent } from './emplist/emplist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildoneComponent } from './childone/childone.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';
import { CreateempComponent } from './createemp/createemp.component';
import { LifecyclelearnParentComponent } from './lifecyclelearn-parent/lifecyclelearn-parent.component';

export const CHILD_ROUTES: Routes = [
  {path: 'childone', component: ChildoneComponent},
  {path: 'childtwo/:name', component: ChildtwoComponent}
];

const routes: Routes = [
  {path: 'lifecycleparent',
component: LifecyclelearnParentComponent},
  {path: 'login',
      component: LogComponent},
  {path: 'employee/:code',
      component: EmployeedetailComponent},
      {path: 'createemployee',
      component: CreateempComponent},
  {path: 'home', component: EmplistComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent,
  children: CHILD_ROUTES}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
