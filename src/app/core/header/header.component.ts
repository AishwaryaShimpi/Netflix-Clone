import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { inject } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navList = ['Home', 'TV Shows','New & Popular','My List','Browse by Language'  ];
  auth = inject(AuthService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  emaiId = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;

  signOut() {
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}
