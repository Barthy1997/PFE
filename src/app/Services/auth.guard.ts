import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 token:any;
 id:any;
  constructor(private authenService:AuthentificationService,private activeRoute: ActivatedRoute ) { }
  
 
  canActivate():boolean
  {
  this.token=localStorage.getItem('token');
  console.log('Bonjour comment',localStorage.getItem('token'))
  if(localStorage.getItem('token'))
    {
      return true;
    }
    else{

      return true;

    }
    
   }
  
  
    
  
   


  }
  

