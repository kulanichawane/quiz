import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import{ MainPage} from '../../pages/main/main';
import {FinalPage} from '../../pages/final/final';
/**
 * Generated class for the GeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alert:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralPage');
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
           console.log("Pass" +" "+ this.results+" of 4" )

           const a = this.alert.create({
            title:'All levels completed ',
            message:this.results +' of 4',
 buttons:[{
  text:'End ',handler:()=>{
 
   this.navCtrl.push(FinalPage);
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

  this.results=0;
}

}]

        })
a.present();
  

    }

   
  }

}
