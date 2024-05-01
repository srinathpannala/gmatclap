import { Component, OnInit } from '@angular/core';
import { LmsService } from '../lms.service'; 
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'] // Corrected typo in styleUrls
})
export class StudentRegisterComponent implements OnInit {
  student: any;
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  nextStudentId: number | undefined;
  emailExists = false;

  constructor(private service: LmsService, private country: CountriesService) { }

  ngOnInit(): void {
    this.getNextStudentId();
    this.getCountries();
  }

  getNextStudentId(): void {
    this.service.getNextStudentId().subscribe(
      (response: any) => {
        this.nextStudentId = response;
      },
      (error: any) => {
        console.error('Error fetching next studentId:', error);
      }
    );
  }

  onSubmit(data: any) {
    // Handle form submission logic here
    this.student = data;
    this.student.studentId = this.nextStudentId;
    this.student.country = this.countryInfo[data.country]?.CountryName || null;
    this.student.state = this.stateInfo[data.state]?.StateName || null;
    this.student.city = this.cityInfo[data.city] || null;

    // Add logic to check email existence before submitting
    if (!this.emailExists) {
      this.service.registerStudent(this.student).subscribe(
        (response: any) => {
          console.log('User registered successfully', response);
        },
        (error: any) => {
          console.error('Error registering user', error);
        }
      );
    }
  }

  getCountries() {
    this.country.allCountries().subscribe(
      (data2: any) => {
        this.countryInfo = data2.Countries;
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }

  onChangeCountry($event: any) {
    const countryIndex = $event.target.value;
    this.stateInfo = this.countryInfo[countryIndex]?.States || [];
    this.cityInfo = this.stateInfo[0]?.Cities || [];
  }

  onChangeState($event: any) {
    const stateIndex = $event.target.value;
    this.cityInfo = this.stateInfo[stateIndex]?.Cities || [];
  }

  checkEmail(email: string): void {
    // Add logic to check email existence and update this.emailExists
    // Call your service to check if the email already exists
    this.service.checkEmailExists(email).subscribe(
      (emailExists: boolean) => {
        this.emailExists = emailExists;
      },
      (error: any) => {
        console.error('Error checking email existence', error);
      }
    );
  }
}


