import { Component, OnInit } from '@angular/core';
import { company } from '../../Interfaces/taqim';
import { TaqimService } from '../../Services/taqim.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Chart, registerables } from 'chart.js';
import { ChartDialogComponent } from '../chart-dialog/chart-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {

  companies: company[] = [];
  allCompanies: company[] = [];
  selectedCompanyNames: string[] = [];
  requestTypeFilter: string = '';
 
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
  constructor(private taqim: TaqimService, private spinner:NgxSpinnerService, public dialog: MatDialog) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.getCompanies('' );
  }

  getCompanies(requestType: string): void {
    this.spinner.show();

    this.taqim.getCompanies(requestType).subscribe({
      next: (data) => {
        console.log('Data received:', data);
        this.companies = data.flat();
        this.allCompanies = data;
        this.spinner.hide();
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.spinner.hide();
      }
    });
  }

  // getCompaniesForDateRange(requestType: string, addedDate: string, addedSecondDate: string): void {
  //   this.spinner.show();

  //   this.taqim.getCompaniesForDateRange(requestType, addedDate, addedSecondDate).subscribe({
  //     next: (data) => {
  //       console.log('Data received from date range:', data);
  //       this.companies = data.flat();
  //       this.spinner.hide();
  //     },
  //     error: (err) => {
  //       console.error('Error fetching data:', err);
  //       this.spinner.hide();
  //     }
  //   });
  // }

  applyRequestTypeFilter(requestType: string): void {
    this.requestTypeFilter = requestType;
    this.applyFilters();
  }


  applyFilters(): void {
    this.getCompanies(this.requestTypeFilter);
  }

  onSelectionChange(): void {
    // Update filtered companies list when selection changes
    this.companies = this.allCompanies.filter(company => !this.selectedCompanyNames.includes(company.companyName));
  }

  get filteredCompanies(): company[] {
    // Filter companies based on selected company names
    return this.companies.filter(company => !this.selectedCompanyNames.includes(company.companyName));
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

