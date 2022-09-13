import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  name = 'Jorge';
  age= 40;
  img:string = 'http://placeimg.com/640/480/tech';
}
