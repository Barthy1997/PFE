import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private api='http://localhost:3000/Compte'
  constructor(private http:HttpClient) { }
   

getallUser()
{
  return this.http.get('https://raw.githubusercontent.com/Barthy1997/StagePFE/main/Dictionnaire1.json');

}

}
