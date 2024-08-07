import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { EvaluateComponent } from './Components/evaluate/evaluate.component';
import { GetEditComponent } from './Components/get-edit/get-edit.component';
import { NOTelrafeComponent } from './Components/notelrafe/notelrafe.component';
import { GETAllWithFliterComponent } from './Components/getall-with-fliter/getall-with-fliter.component';
import { GETAllFilterEditComponent } from './Components/getall-filter-edit/getall-filter-edit.component';
import { FliterCompaniesComponent } from './Components/fliter-companies/fliter-companies.component';
import { FliterEditCompanyComponent } from './Components/fliter-edit-company/fliter-edit-company.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { 
    path: 'DashBoard', 
    component: DashBoardComponent, 
    children: [
      { path: 'Evaluate', component:EvaluateComponent },
      { path: 'Edit', component: GetEditComponent },
      {path:'NotUploaded',component:NOTelrafeComponent},
      {path:'AllFilter',component:GETAllWithFliterComponent},
      {path:'AllFilterEdit',component:GETAllFilterEditComponent},
      {path:'FliterCompany',component:FliterCompaniesComponent},
      {path:'FliterEditCompany',component:FliterEditCompanyComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
