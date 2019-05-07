import { Component,} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
//create a variable for ngModel
uname: string = '';
//create a variable minimum length
minLength: number = 3;
//variable which does not show the card
isLoaded: boolean =false;
user:any;




  constructor(private http:HttpClient) { }
  //create function for ngModelChange
  onChangeEmit(){
    if(this.minLength<= this.uname.length){
      //create get requests on api github
      this.http.get('https://api.github.com/users/'+this.uname)
.subscribe((user)=>{
  this.user=user;
  console.log(this.user);
})
this.isLoaded=true;

    }

    }
  }



