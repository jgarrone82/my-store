import { Component } from '@angular/core';
import { Product } from './product.model';

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
  btnDisabled = true;

  user = {
    name: '',
    email: '',
    password: ''
  }

  names: string[] = ['Jorge', 'Noelia', 'Valentino', 'Giovanni','Stefano'];

  newName = '';

  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  products: Product[] = [
    {
      name: 'Console Retro 80\'s',
      price: 200,
      image: './assets/images/ConsoleRetro.jpg'
    },
    {
      name: 'Gaming Laptop',
      price: 990,
      image: './assets/images/Laptop.jpg'
    },
    {
      name: 'Mini Game boy Retro',
      price: 100,
      image: './assets/images/RetroConsole.jpg'
    },
    {
      name: 'New Smart Phone with 4 Cameras',
      price: 750,
      image: './assets/images/SmartPhone.jpg'
    },
    {
      name: 'Smart Tv 4k UHD',
      price: 550,
      image: './assets/images/SmartTv.jpg'
    },
    {
      name: 'Smart Watch with Wear Os 3.5',
      price: 300,
      image: './assets/images/SmartWatch.jpg'
    }
  ];

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.user);
  }
}
