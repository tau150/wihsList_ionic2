import { ListItem } from './list-item';

export class List{
  name:string;
  completed:boolean;
  items:ListItem[];

  constructor(name:string){
    this.name=name;
    this.completed= false;
  }

}
