// dash-board.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  activeLink: string = '';

  isSideBarEnable: boolean = true;
  activeSubMenu: string | null = null;
  constructor(private router: Router ,private authService:AuthService ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.urlAfterRedirects;
      }
    });
  }

  isActive(link: string): boolean {
    return this.activeLink === link;
  }

  

  ngOnInit(): void {}
  

  toggleSideBar(): void {
    this.isSideBarEnable = !this.isSideBarEnable;
  }

  toggleSubMenu(subMenu: string) {
    if (this.activeSubMenu === subMenu) {
      this.activeSubMenu = null;
    } else {
      this.activeSubMenu = subMenu;
    }
  }
  logout(): void {
    this.authService.logOut(); // Call the logout method from AuthService
    this.router.navigate(['/Home']); // Redirect to home page after logging out
  }

}
