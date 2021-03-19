import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-gestion-tourne',
  templateUrl: './gestion-tourne.component.html',
  styleUrls: ['./gestion-tourne.component.css']
})
export class GestionTourneComponent implements OnInit {

  listUser:any;
  constructor(private authenService:AuthentificationService) { }

  ngOnInit(): void {
    this.authenService.getUser().subscribe(
      data=>{
        this.listUser=data;
        console.log(this.listUser)
      }
    )
  }

}
