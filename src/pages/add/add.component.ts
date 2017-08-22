import { Component, OnInit } from '@angular/core';
import { List, ListItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import { WishListService } from '../../app/services/wish-list.service';


@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

  listName:string= '';
  itemName:string ='';

  items:ListItem[]=[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public _wishList: WishListService) {  }

  ngOnInit() {}

  add(){

    if(this.itemName.length == 0){
      return;
    }

    let item = new ListItem(this.itemName);
    this.items.push(item);
    this.itemName= '';

  }

  delete(index:number){
    this.items.splice(index, 1);
  }

  saveList(){
    if(this.listName.length == 0){
      let alert = this.alertCtrl.create({
          title: 'Nombre de Lista ',
          subTitle: 'El nombre de la lista es necesario',
          buttons: ['OK']
        });
      alert.present();
      return;
    }

    let list = new List(this.listName);
    list.items = this.items;

    this._wishList.addList(list);

    this.navCtrl.pop();

  }


}
