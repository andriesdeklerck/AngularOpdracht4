import { Component } from '@angular/core';
import { NgForage } from 'ngforage';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.css']
})
export class AppComponent {
  title = 'Angular Opdracht';

  card: boolean = false;
  oldCard: boolean = false;

  constructor(private readonly ngf: NgForage, private router: Router) {
  }

  public getItem<T = any>(key: string): Promise<T> {
    return this.ngf.getItem<T>(key);
  }

  ChangeView(): void {
    this.getItem<boolean>('card').then(value => this.card = value);
    this.card = !this.card;
    this.ngf.setItem<boolean>('card', this.card);
    console.log(this.card);
    this.router.navigate(['/home']);
    if (this.oldCard != this.card) {
      alert("You changed the view.");
    }
    this.oldCard = this.card;
  }
}
