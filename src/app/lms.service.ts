import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LmsService {
  private baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  registerUser(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/register', data);
  }

  // getUser(email: string, password: string): Observable<any> {
  //   const body = { email, password };
  //   return this.http.post<any>('http://localhost:8080/login', body);
  // }

  checkTrainerEmailExists(email: string): Observable<boolean> {
    const url = `${this.baseUrl}/checkTrainerEmail?email=${email}`;
    return this.http.get<boolean>(url);
  }
  // getQuestions(): Observable<any> {
  //   return this.http.get('http://localhost:8080/showQuestions');
  // }

  // getOptions(questionId: number): Observable<any> {
  //   return this.http.get(`http://localhost:8080/getOptionsById/${questionId}`);
  // }

  getNextTrainerId(): Observable<number> {
    return this.http.get<number>('http://localhost:8080/nextTrainerId');
  }


  // saveQuestionAndOptions(formData: any): Observable<any> {
  //   // Assuming you have an API endpoint to handle the form data
  //   return this.http.post('http://localhost:8080/saveQuestionAndOptions', formData);
  // }


  // storeResponses(responses: any[]): Observable<any> {
  //   console.log(responses);
  //   return this.http.post('http://localhost:8080/storeResponses', responses);
  // }




  registerStudent(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/registerStudent', data);
  }

  checkEmailExists(email: string): Observable<boolean> {
    const url = `${this.baseUrl}/checkStudentEmail?email=${email}`;
    return this.http.get<boolean>(url);
  }

//   getStudent(email: string, password: string): Observable<any> {
//     const body = { email, password };
//     return this.http.post<any>('http://localhost:8080/loginStudent', body);

//   }
//   deleteQuestion(id: number): Observable<any> {
//     return this.http.delete(`http://localhost:8080/deleteQuestion/${id}`);
//   }

//   getSubjectTags(): Observable<any> {
//     return this.http.get('http://localhost:8080/getSubjectTags');
//   }
//   getTopicTags(subject: string): Observable<any> {
//     return this.http.get(`http://localhost:8080/getTopicTags/${subject}`);
//   }
//   addCourse(data: any): Observable<any> {
//     return this.http.post('http://localhost:8080/addCourse', data);
//   }

//   getCourses(): Observable<any> {
//     return this.http.get<any[]>('http://localhost:8080/getCourses')
//       .pipe(
//         map(courses => courses.map(course => course.courseName))
//       );
//   }

  getNextStudentId(): Observable<number> {
    return this.http.get<number>('http://localhost:8080/nextStudentId');
  }


//   getStudents():Observable<any>{
//     return this.http.get<any>('http://localhost:8080/getStudents');
//   }

//   getQuestionById(id:any):Observable<any>{
//     return this.http.get<any>(`http://localhost:8080/getQuestionById/${id}`);
//   }


 }

