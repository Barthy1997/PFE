import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/Services/compte.service';

@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.css']
})
export class GestionCompteComponent implements OnInit {

  listeUser:any;
  tab=['j&','e','5çm','6D@#','é8è','321','=°d9','@g','$','^ù:','eiu','keuy','j','e','rmmp','e','de','12IU8ù'];
  pwd=['']
  t:any ;
  mot:any;
  constructor(private gestionCompte:CompteService) { }

  ngOnInit(): void {
    this.gestionCompte.getallUser().subscribe(data=>{
      this.listeUser=data;
      this.listeUser=this.listeUser.Dictionnaire=['aa','aa','aa'];
    })
   console.log(this.listeUser,"Bon");

   for(var i=0;i<12;i++)
   {

     this.t=Math.floor(Math.random()*2 * Math.random()*3/Math.random() ); 
     var rp=this.tab[this.t]
    this.pwd.push(rp)
   this.mot= this.pwd.join('')
     
   }
   console.log( this.mot)


  }

  Randompwd()
  {
  }

}
