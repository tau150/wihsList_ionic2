import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../clases/lists';

@Pipe({
  name: 'pendients',
  pure:false
})
export class PendientsPipe implements PipeTransform {
  transform(lists: List[], state: boolean=true): List[] {
    let newList:List[]=[];
    for (let list of lists) {
      if(list.completed == state){
        newList.push(list);
      }
    }
    return newList;
  }
}
