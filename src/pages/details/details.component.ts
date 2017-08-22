import { Component, OnInit } from '@angular/core';
import { NavController, NavParams }  from "ionic-angular";
import { List, ListItem } from '../../app/clases/index';
import {WishListService} from '../../app/services/wish-list.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-details',
  templateUrl: 'details.component.html',
})
export class DetailsComponent implements OnInit {

  index:number;
  list:any;

  constructor( public navCtrl: NavController, public navParams: NavParams, public _wishList: WishListService, public alertCtrl: AlertController ) {
    this.index = this.navParams.get('index');
    this.list = this.navParams.get('list');
   }

  ngOnInit() {}

  update(item:ListItem){

    item.completed = !item.completed;
    let allCompleted = true;

    for (let item of this.list.items) {
      if(!item.completed){
        allCompleted = false;
        break;
      }
    }

    this.list.completed = allCompleted;

    this._wishList.updateData();
  }


  deleteList(){
  let confirm = this.alertCtrl.create({
    title: this.list.name,
    message: 'Esta seguro que quiere eliminar la lista?',
    buttons: ['Cancelar',
      {
        text: 'Eliminar ',
        handler: () => {
          this._wishList.deleteList(this.index);
          this.navCtrl.pop();
        }
      }
    ]
  });
  confirm.present();
  }


}
