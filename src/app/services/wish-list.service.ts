import { Injectable } from '@angular/core';
import { List } from '../clases/lists';


@Injectable()
export class WishListService {

  lists:List[]=[];


  constructor() {

   this.saveData();

   }

   updateData(){
     localStorage.setItem('data', JSON.stringify(this.lists) );
   }

   saveData(){
     if( localStorage.getItem('data') ){
        this.lists = JSON.parse(localStorage.getItem('data'));
     }

   }

   addList(list:List){
     this.lists.push(list);
     this.updateData();
   }


   deleteList(index:number){
     this.lists.splice(index, 1);
     this.updateData();
   }

}
