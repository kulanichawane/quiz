import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import global from '../../app/res'
import {EnglishpagePage} from '../englishpage/englishpage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alert:AlertController) {

  }

  
  question1;
  question2;
  question3;
  question4;

  results = 0;

  submit() {
    if (this.question1 == 1) {

      this.results = this.results + 1

      console.log(this.results);
    }

    if (this.question2 == 4) {

      this.results = this.results + 1

      console.log(this.results);
    }

    if (this.question3 == 4) {

      this.results = this.results + 1

      console.log(this.results);
    }
    if (this.question4 == 4) {

      this.results = this.results + 1

      console.log(this.results);

    }

    if(this.results >= 4){
           console.log("pass" +" "+ this.results+" of 4" )

           const a = this.alert.create({
            title:'Level 1 completed ',
            message:this.results +' of 4',
 buttons:[{
  text:'Level 2',handler:()=>{
 
   this.navCtrl.push(EnglishpagePage);
  }
 
 }]
 
            })
 a.present();
         

          

    }else{
      console.log("pass" +" "+ this.results + " of 4" )
      const a = this.alert.create({
        title:'Level 1 Not Completed ',
        message:this.results +' of 4',
buttons:[{
text:'Level 1',handler:()=>{

  this.question1=0;
  this.question2=0;
  this.question3=0;
  this.question4=0;

  this.results=0;
}

}]

        })
a.present();
  

    }

   
  }

}


