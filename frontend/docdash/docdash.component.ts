import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  standalone: false,
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {

  constructor(private patientService:PatientService , private router:Router , private docauth:DocauthService) {}

  patients: Patient[] = [];

  ngOnInit():void {
    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe(data => {
      console.log("Fetched patients:", data);
      this.patients = data;
    },
    error => {
      console.error("Error fetching patients:", error);  // <-- And this
    }
  )
  }

  update(id:number){
    this.router.navigate(['update-patient',id])
  }

  delete(id:number){
    this.patientService.delete(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    })
  }

  view(id:number){
    this.router.navigate(['view-patient',id]);
  }

  logout(){
    this.docauth.logOut();
    this.router.navigate(['home']);
  }

}
