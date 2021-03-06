import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../app/services/wish-list.service';
import { NavController } from 'ionic-angular';
import { AddComponent } from '../add/add.component';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor( private _wishList: WishListService, private navCtrl:NavController ) {  }

  ngOnInit() {}


  goAdd(){
    this.navCtrl.push( AddComponent );
  }

  seeDetails(list, index:number){
    this.navCtrl.push( DetailsComponent,  {list, index}
    );
  }

}
