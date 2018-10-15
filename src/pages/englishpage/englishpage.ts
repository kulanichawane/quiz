import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ResultsPage } from '../../pages/results/results';

/**
 * Generated class for the EnglishpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-englishpage',
  templateUrl: 'englishpage.html',
})
export class EnglishpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnglishpagePage');
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

    if (this.results >= 4) {
      console.log("Pass" + " " + this.results + " of 4")

      const a = this.alert.create({
        title: 'Level 2 Completed ',
        message: this.results + ' of 4',
        buttons: [{
          text: 'Level 3', handler: () => {

            this.navCtrl.push(ResultsPage);
          }

        }]

      })
      a.present();


    } else {
      console.log("Fail" + " " + this.results + " of 4")
      const a = this.alert.create({
        title: 'Level 2 Not Completed',
        message: this.results + ' of 4',
        buttons: [{
          text: 'Level 2', handler: () => {

            this.question1 = 0;
            this.question2 = 0;
            this.question3 = 0;
            this.question4 = 0;

            this.results = 0;
          }

        }]

      })
      a.present();






    }


  }

}
