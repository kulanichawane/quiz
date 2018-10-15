import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GeneralPage } from '../../pages/general/general'

/**
 * Generated class for the SportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportsPage');
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

    if (this.results >= 4) {
      console.log("Pass" + " " + this.results + " of 4")

      const a = this.alert.create({
        title: 'Level 4 completed ',
        message: this.results + ' of 4',
        buttons: [{
          text: 'Level 5', handler: () => {

            this.navCtrl.push(GeneralPage);
          }

        }]

      })
      a.present();




    } else {
      console.log("Fail" + " " + this.results + " of 4")
      const a = this.alert.create({
        title: 'Level 5 Not Completed ',
        message: this.results + ' of 4',
        buttons: [{
          text: 'Level 4', handler: () => {

            this.question1 = 0;
            this.question2 = 0;
            this.question3 = 0;
            this.question4 = 0;
            this.check1 = false;
            this.check2 = false;
            this.check3 = false;
            this.check4 = false;
            this.results = 0;
          }

        }]

      })
      a.present();


    }


  }

}
