import { Component, OnInit } from '@angular/core';
import { company } from '../../Interfaces/taqim';
import { TaqimService } from '../../Services/taqim.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { Chart, registerables } from 'chart.js';
import { ChartDialogEDitComponent } from '../chart-dialog-edit/chart-dialog-edit.component';


@Component({
  selector: 'app-get-edit',
  templateUrl: './get-edit.component.html',
  styleUrls: ['./get-edit.component.css']  
})
export class GetEditComponent implements OnInit {
  
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
  constructor(private EditService: TaqimService, private spinner: NgxSpinnerService,public dialog:MatDialog) {
    Chart.register(...registerables);

  }

  ngOnInit(): void {
    this.getEditCompanies();
  }

  getEditCompanies() {
    this.spinner.show();
    this.EditService.GetEdit().subscribe(res => {
      this.companies = res;
      this.allCompanies = res; // Save the original data for the select options
      this.spinner.hide();
    }, error => {
      console.error('Error fetching companies:', error);
      console.log(error)
    });
  }

  applyRequestTypeFilter(requestType: string): void {
    this.requestTypeFilter = requestType;
    this.applyFilters();
  }


  applyFilters(): void {
    this.getEditCompanies();
  }

  onSelectionChange(): void {
    this.companies = this.allCompanies.filter(company => !this.selectedCompanyNames.includes(company.companyName));
  }


  get filteredCompanies(): company[] {
    return this.companies.filter(company => !this.selectedCompanyNames.includes(company.companyName));
  }

  openAcceptedPercentageDialog(): void {
    this.dialog.open(ChartDialogEDitComponent, {
      width: '80%',
      data: { companies: this.companies, chartType: 'acceptedPercentage' }
    });
  }
  openTotalAcceptedDialog(): void {
    
    this.dialog.open(ChartDialogEDitComponent, {
      width: '80%',
      data: { companies: this.companies, chartType: 'totalAcceptedNumber' }
    });
  }

}
