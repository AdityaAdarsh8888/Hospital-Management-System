// import { Component } from '@angular/core';
// import { PatientService } from '../patient.service';
// import { Patient } from '../patient';

// @Component({
//   selector: 'app-admindash',
//   standalone: false,
//   templateUrl: './admindash.component.html',
//   styleUrl: './admindash.component.css'
// })
// export class AdmindashComponent {

//   patients:Patient[]=[];
//   constructor(private patientService:PatientService){}
//   ngOnInit():void{
//     console.log('AdminDashComponent Initialized');
//     this.getPatients();
//   }

//   getPatients() {
//     this.patientService.getPatientList().subscribe(data=>{
//       this.patients=data;
//     })
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { AdminauthService } from '../adminauth.service';


@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css'] // ⬅️ typo fixed: was 'styleUrl'
})
export class AdmindashComponent {
  patients: Patient[] = [];
  allPatients: Patient[] = []; // Store original list
  searchText: string = '';

  constructor(private patientService: PatientService , private adminauthService:AdminauthService , private router:Router) {}

  ngOnInit(): void {
    console.log('AdminDashComponent Initialized');
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
      this.allPatients = data;
    });
  }

  searchPatients() {
    const search = this.searchText.toLowerCase();
    this.patients = this.allPatients.filter(patient =>
      Object.values(patient).some(value =>
        value?.toString().toLowerCase().includes(search)
      )
    );
  }

  delete(id:number){
    this.patientService.delete(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    })
  }

  logout(){
    this.adminauthService.logOut();
    this.router.navigate(['home']);
  }
}
