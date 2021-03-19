import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthentificationService } from '../Services/authentification.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit  {

  listeUser: any;
  Username:any;
  deconect:any;
  token:any;
  constructor(private authenService:AuthentificationService,private route:Router,private activeRoute:ActivatedRoute) { 
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }
  }


  ngOnInit(): void {
    this.Username=localStorage.getItem('username') 
    console.log( this.Username)
     
            
         
      
  }
 
  deconnexion()
  {
    this.authenService.Deconnection();
    this.route.navigate([''])

  }
  


}
