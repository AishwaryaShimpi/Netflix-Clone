import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corrected styleUrls
})
export class LoginComponent implements OnInit {
  private router = inject(Router)
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '844477958294-8pkj1h45g5859klh187nleo2eicdgtj6.apps.googleusercontent.com',  // Replace with your actual client ID
      callback: (response: any) => this.handleLogin(response)
    });

    google.accounts.id.renderButton(
      document.getElementById('google-btn'),
      { theme: 'filled_blue', size: 'large', shape: 'rectangle', width: 280 }
    );
  }

  private decodeToken(token: string){
    return JSON.parse(atob(token.split('.')[1]));
  }
  handleLogin(resp: any) {
    if(resp){
      const payload = this.decodeToken(resp.credential);
      sessionStorage.setItem("loggedInUser",JSON.stringify(payload));
      this.router.navigate(['browse']);
    }
  }
}
