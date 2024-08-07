import { Component, OnInit } from '@angular/core';
import { TaqimService } from '../Services/taqim.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { Chart, registerables } from 'chart.js';
import { company } from '../Interfaces/taqim';
import { ChartDialogFliterCompanyComponent } from '../Components/chart-dialog-fliter-company/chart-dialog-fliter-company.component';

@Component({
  selector: 'app-fliter-edit-compay',
  templateUrl: './fliter-edit-compay.component.html',
  styleUrl: './fliter-edit-compay.component.css'
})
export class FliterEditCompayComponent implements OnInit {
  selectedCompany: string | null = null;
  month:string | null = null;

  companies: company[] = [];
  allCompanies: company[] = [];
  selectedCompanyNames: string[] = [];
  requestTypeFilter: string = '';
  startYear: string = '';
  endYear: string = '';
  months:string='';
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

  constructor(private taqim :TaqimService , private spinner:NgxSpinnerService, public dialog:MatDialog){
    Chart.register(...registerables);

  }

  ngOnInit(): void {
    
  }
  getFliterCompaines(requestType:string,startYear:string,endYear:string){

  this.spinner.show()
    
  this.taqim.GetFilterGetT3delat(requestType,startYear,endYear).subscribe(
    res=>{
    this.companies=res;
    this.allCompanies=res;
    this.spinner.hide()

  },error=>{
    console.error('Error fetching data:', error);
  });
}
applyRequestTypeFilter(requestType: string): void {
  this.requestTypeFilter = requestType;
}
applyAddedDateFilter(date: string): void {
  this.startYear = date;
}
applyAddedSecondDateFilter(date: string): void {
  this.endYear = date;
}

onStartDateFilterChange(event: any): void {
  const date = (event.target as HTMLInputElement).value;
  this.applyAddedDateFilter(date);
}

onEndDateFilterChange(event: any): void {
  const date = (event.target as HTMLInputElement).value;
  this.applyAddedSecondDateFilter(date);
}

applyFilters(): void {
  this.getFliterCompaines(this.requestTypeFilter, this.startYear,this.endYear)

}
formatDate(month: number, year: number): string {
const monthNames = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];
return `${monthNames[month - 1]} - ${year}`; // Adjust month - 1 for zero-based index
}
openAcceptedPercentageDialog(): void {
this.dialog.open(ChartDialogFliterCompanyComponent, {
  width: '80%',
  data: { companies: this.companies, chartType: 'precentage' }
});
}

openTotalAcceptedDialog(): void {
this.dialog.open(ChartDialogFliterCompanyComponent, {
  width: '80%',
  data: { companies: this.companies, chartType: 'acceptedOrders' }
});
}

openAcceptedEditDialog(): void {
this.dialog.open(ChartDialogFliterCompanyComponent, {
  width: '80%',
  data: { companies: this.companies, chartType: 'totalEdit' }
});
}

openCombinedChartDialog(): void {
this.dialog.open(ChartDialogFliterCompanyComponent, {
  width: '80%',
  data: { companies: this.companies, chartType: 'combined' }
});
}

}
