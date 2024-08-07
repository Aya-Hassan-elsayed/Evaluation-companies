import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './Components/home/home.component';
import { DashBoardComponent } from './Components/dash-board/dash-board.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GetEditComponent } from './Components/get-edit/get-edit.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EvaluateComponent } from './Components/evaluate/evaluate.component';
import { HttpClientModule } from '@angular/common/http';
import { NOTelrafeComponent } from './Components/notelrafe/notelrafe.component';
import { ChartDialogComponent } from './Components/chart-dialog/chart-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GETAllWithFliterComponent } from './Components/getall-with-fliter/getall-with-fliter.component';
import { GETAllFilterEditComponent } from './Components/getall-filter-edit/getall-filter-edit.component';
import { ChartDialogEDitComponent } from './Components/chart-dialog-edit/chart-dialog-edit.component';
import { ChartDialogNOTuploadComponent } from './Components/chart-dialog-notupload/chart-dialog-notupload.component';
import { FliterCompaniesComponent } from './Components/fliter-companies/fliter-companies.component';
import { ChartDialogFliterCompanyComponent } from './Components/chart-dialog-fliter-company/chart-dialog-fliter-company.component';
import { ToastrModule } from 'ngx-toastr';
import { FliterEditCompanyComponent } from './Components/fliter-edit-company/fliter-edit-company.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashBoardComponent,
    EvaluateComponent,
    GetEditComponent,
    NOTelrafeComponent,
    ChartDialogComponent,
    GETAllWithFliterComponent,
    GETAllFilterEditComponent,
    ChartDialogEDitComponent,
    ChartDialogNOTuploadComponent,
    FliterCompaniesComponent,
    ChartDialogFliterCompanyComponent,
    FliterEditCompanyComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    NgxSpinnerModule.forRoot({ type: 'ball-circus' }),
    HttpClientModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    

   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
