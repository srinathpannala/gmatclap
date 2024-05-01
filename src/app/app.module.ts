import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GmatofferingsComponent } from './gmatofferings/gmatofferings.component';
import { GmatstructureComponent } from './gmatstructure/gmatstructure.component';
import { BlogComponent } from './blog/blog.component';
import { AdmissionComponent } from './admission/admission.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PedagogyComponent } from './pedagogy/pedagogy.component';
// import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { GmatComponent } from './gmat/gmat.component';
import { GmatquestionsComponent } from './gmatquestions/gmatquestions.component';
import { GmatmasteryComponent } from './gmatmastery/gmatmastery.component';
import { AdvertisingModule } from './advertising/advertising.module';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { HttpClientModule } from '@angular/common/http';
import { UniversitiesComponent } from './universities/universities.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GmatofferingsComponent,
    GmatstructureComponent,
    BlogComponent,
    AdmissionComponent,
    NotfoundComponent,
    PedagogyComponent,
    // RegistrationComponent,
    LoginComponent,
    GmatComponent,
    GmatquestionsComponent,
    GmatmasteryComponent,
    ContactusComponent,
    PrivacypolicyComponent,
    StudentRegisterComponent,
    EnquiryComponent,
    UniversitiesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdvertisingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
