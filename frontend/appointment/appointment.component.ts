// import { Component, OnInit } from '@angular/core';
// import { AppointmentService } from '../appointment.service';
// import { Appointment } from '../appointment';

// @Component({
//   selector: 'app-appointment',
//   standalone: false,
//   templateUrl: './appointment.component.html',
//   styleUrl: './appointment.component.css'
//   styleUrls: ['./appointment.component.css']
// })

// export class AppointmentComponent {

//   appointments:Appointment[]=[]
//   constructor(private appointmentService: AppointmentService) {}

//   ngOnInit():void{
//     this.getAppointments();
//   }

//   getAppointments() {
//     this.appointmentService.getAllAppointments().subscribe(data=>{
//       this.appointments=data;
//     })
//   }

// }


import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {

  appointments: Appointment[] = [];
  filteredAppointments: Appointment[] = [];
  searchText: string = '';

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAllAppointments().subscribe(data => {
      this.appointments = data;
      this.filteredAppointments = data;
    });
  }

  searchPatients() {
    const text = this.searchText.toLowerCase();
    this.filteredAppointments = this.appointments.filter(app =>
      app.name.toLowerCase().includes(text) ||
      app.symptoms.toLowerCase().includes(text) ||
      app.number.toLowerCase().includes(text)
    );
  }

  delete(id:number) {
    this.appointmentService.deleteAppointment(id).subscribe(data => {
      console.log(data);
      this.getAppointments();
    })
  }
}
