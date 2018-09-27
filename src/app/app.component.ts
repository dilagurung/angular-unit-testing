import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'syntey';
  public val=0;
  private message:string;


  increment()
  {
    if(this.val<15)
    {
      this.val+=1;
      this.message='';

    }
    else {

      this.message='stack overflow';   }

  }

  decrement()
  {

    if(this.val>0)
    {
      this.val-=1;
      this.message='';

    }
    else {

      this.message='Reorder Level reached';   }

  }



}
