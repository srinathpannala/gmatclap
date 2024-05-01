import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  formData: any = {};

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post<any>('http://localhost:8080/enquiries/', this.formData).subscribe(
      response => {
        console.log(response);
        alert('Enquiry submitted successfully!');
        // Reset form data after successful submission
        this.formData = {};
      },
      error => {
        console.error(error);
        alert('An error occurred while submitting the enquiry.');
      }
    );
  }
}
