import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
    // res: Observable<any[]>;
    ngOnInit(){
      var obj1 = Observable.create(this.asyncStream);
      //var obj2 = obj1.pipe(map(x:Number => Math.round(x)));
      var obj3 = obj1.pipe(filter(x => x>4 ))
      obj3.subscribe(res=> this.Listener(res));
    }
    asyncStream(observer){
      var t1 = setInterval(() => {
        observer.next(Math.random()*10); 
      },1000);
    }
    output:any;
    Listener(res){
      console.log(res)
      this.output=res;
    }
}
