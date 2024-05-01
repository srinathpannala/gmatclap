import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor() {}

  login() {
    // Check if the entered credentials match the hardcoded values
    if (this.username === 'Raaj Tomar' && this.password === 'Indian@108') {
      // Credentials are correct, perform login logic here
      console.log('Login successful!');
      // You can redirect the user or perform any other action upon successful login
    } else {
      // Credentials are incorrect, display an error message
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }
}

