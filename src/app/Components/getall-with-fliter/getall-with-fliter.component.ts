import { Component, OnInit } from '@angular/core';
import { company } from '../../Interfaces/taqim';
import { TaqimService } from '../../Services/taqim.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { Chart, registerables } from 'chart.js';
import { ChartDialogComponent } from '../chart-dialog/chart-dialog.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-getall-with-fliter',
  templateUrl: './getall-with-fliter.component.html',
  styleUrl: './getall-with-fliter.component.css'
})
export class GETAllWithFliterComponent implements OnInit {
  selectedCompany: string | null = null;
  startDate: string | null = null;
  endDate: string | null = null;
  errorMessage: string = "";
  error: boolean = false;
  companies: company[] = [];
  allCompanies: company[] = [];
  selectedCompanyNames: string[] = [];
  requestTypeFilter: string = '';
  addedDateFilter: string = '';
  addedSecondDate: string = '';
  chart: any;

  requestTypes = [
    { label: 'None', value: '' },
    { label: 'بيرفكت سيرفاى', value: 45 },
    { label: 'إسبكترم', value: 46 },
    { label: 'الجيزة', value: 47 },
    { label: 'الماسة', value: 48 },
    { label: 'جيومكانى', value: 49 },
    { label: 'ماستر سيرفاى', value: 50 },
    { label: 'ايدج برو', value: 51 },
    { label: 'سيفل كاد', value: 52 },
    { label: 'المصرية الكويتية', value: 53 },
    { label: 'انفو فاكت', value: 54 },
    { label: 'هاى ليفل', value: 55 },
    { label: 'زون سيرفاي', value: 56 },
    { label: 'MSD', value: 57 },
    { label: 'الصفا سيرفاى', value: 60 },
    { label: 'الاستشارى سيرفاى', value: 61 },
    { label: 'بريسيشن سيرفاى', value: 62 },
    { label: 'بي ام سي سيرفاي', value: 63 },
    { label: 'جيوسكيل', value: 64 },
    { label: 'عمارنه للمقاولات', value: 65 },
    { label: 'النقيب', value: 66 },
    { label: 'وايز جروب', value: 67 },
    { label: 'هندسه البناء', value: 68 },
    { label: 'المستقبل', value: 69 },
    { label: 'الصفا للمقاولات', value: 70 },
    { label: 'المجد', value: 72 },
    { label: 'اليمامة', value: 74 },
    { label: 'المصرية للخدمات', value: 76 },
    { label: 'انيكس', value: 79 },
    { label: 'المصرية المساحة', value: 80 },
    { label: 'بروكسيما', value: 81 },
    { label: 'تشاري البحر الاحمر', value: 84 },
    { label: 'فيرتكس', value: 86 },
    { label: 'ام جى اى اس', value: 88 },
    { label: 'الطلبات المستردة', value: 89 },
    { label: 'الكريم للمقاولات', value: 99 }
  ];

  constructor(private taqim: TaqimService, private spinner: NgxSpinnerService,public dialog:MatDialog ,private toaster:ToastrService ) {
    Chart.register(...registerables);

  }

  ngOnInit(): void {}

  getFliterCompanies(requestType: string, addedDate: string, addedSecondDate: string) {
    this.spinner.show();
    this.taqim.GetAllwithFilter(requestType, addedDate, addedSecondDate).subscribe(
      res => {
        this.companies = res;
        this.allCompanies = res;
        this.spinner.hide();
      },
      (error: any) => {
        if (error && error.error) {
          this.errorMessage = error.error;
        } else {
          this.errorMessage = "An error occurred during update.";
        }
        this.error = true;
        this.toaster.error(this.errorMessage, "Error", { disableTimeOut: true, positionClass: 'toast-top-center' });
      }
    
    );
  }

  applyRequestTypeFilter(requestType: string): void {
    this.requestTypeFilter = requestType;
  }

  applyAddedDateFilter(date: string): void {
    this.addedDateFilter = date;
  }

  applyAddedSecondDateFilter(date: string): void {
    this.addedSecondDate = date;
  }

  applyFilters(): void {
    this.getFliterCompanies(this.requestTypeFilter, this.addedDateFilter, this.addedSecondDate);
  }

  onStartDateFilterChange(event: any): void {
    const date = (event.target as HTMLInputElement).value;
    this.applyAddedDateFilter(date);
  }

  onEndDateFilterChange(event: any): void {
    const date = (event.target as HTMLInputElement).value;
    this.applyAddedSecondDateFilter(date);
  }
  openAcceptedPercentageDialog(): void {
    this.dialog.open(ChartDialogComponent, {
      width: '80%',
      data: { companies: this.companies, chartType: 'acceptedPercentage' }
    });
  }

  openTotalAcceptedDialog(): void {
    
    this.dialog.open(ChartDialogComponent, {
      width: '80%',
      data: { companies: this.companies, chartType: 'totalAcceptedNumber' }
    });
  }
  
}
