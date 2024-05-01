import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { AdmissionComponent } from './admission/admission.component';
import { BlogComponent } from './blog/blog.component';
import { GmatofferingsComponent } from './gmatofferings/gmatofferings.component';
import { GmatstructureComponent } from './gmatstructure/gmatstructure.component';
import { PedagogyComponent } from './pedagogy/pedagogy.component';
import { GmatComponent } from './gmat/gmat.component';
import { GmatquestionsComponent } from './gmatquestions/gmatquestions.component';
import { GmatmasteryComponent } from './gmatmastery/gmatmastery.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { UniversitiesComponent } from './universities/universities.component';
import { AdminComponent } from './admin/admin.component';
// import { EnquiryComponent } from './enquiry/enquiry.component';




const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'admission',component:AdmissionComponent},
  {path: 'blog',component:BlogComponent},
  
  {path: 'home',component:HomeComponent},
  {path: 'gmatofferings',component:GmatofferingsComponent},
  {path: 'gmatstructure',component:GmatstructureComponent},
  {path: 'pedagogy',component:PedagogyComponent},
  {path: 'enquiry', component:EnquiryComponent},
  {path: 'gmatquestions', component:GmatquestionsComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'privacy-policy', component:PrivacypolicyComponent},
  
  {path: 'master-gmat-with-raaj', component:GmatmasteryComponent},
  {path :'studentRegistration',component:StudentRegisterComponent},
  {path: 'universities',component:UniversitiesComponent},
  {path: 'adminlogin',component:AdminComponent},
  
  
  
  {path: 'gmat', component:GmatComponent},
  {path: "**",component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
