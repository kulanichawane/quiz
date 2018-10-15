import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {SportsPage } from '../../pages/sports/sports';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alert:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  question1;
  question2;
  question3;
  question4;
  check1;
  check2;
  check3;
  check4;
  
  

  results = 0;

  submit() {
    if (this.question1 == 1) {

      this.results = this.results + 1;

      console.log(this.results);
    }

    if (this.question2 == 3) {

      this.results = this.results + 1;

      console.log(this.results);

    }

    if (this.question3 == 4) {

      this.results = this.results + 1;

      console.log(this.results);
    }
    if (this.question4 == 4) {

      this.results = this.results + 1;

      console.log(this.results);

    }

    if(this.results >= 4){
           console.log("Pass" +" "+ this.results+" of 4" )

           const a = this.alert.create({
            title:'Level completed ',
            message:this.results +' of 4',
 buttons:[{
  text:'Level 4',handler:()=>{
 
  this.navCtrl.push(SportsPage);
  }
 
 }]
 
            })
 a.present();
         

          

    }else{
      console.log("Fail" +" "+ this.results + " of 4" )
      const a = this.alert.create({
        title:'Not Completed ',
        message:this.results +' of 4',
buttons:[{
text:'Okay',handler:()=>{

  this.question1=0;
  this.question2=0;
  this.question3=0;
  this.question4=0;
this.check1=false;
this.check2=false;
this.check3=false;
this.check4=false;
  this.results=0;
}

}]

        })
a.present();
  

    }

 
}

}