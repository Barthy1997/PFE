import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-gestion-objectif',
  templateUrl: './gestion-objectif.component.html',
  styleUrls: ['./gestion-objectif.component.css']
})
export class GestionObjectifComponent implements OnInit {


  listUser:any;
  constructor(private authenService:AuthentificationService) { }

  ngOnInit(): void {
    this.authenService.getUser().subscribe(
      data=>{
        this.listUser=data;
        this.listUser=Array(this.listUser);
        console.log(this.listUser)
      }
    )
  }

}
