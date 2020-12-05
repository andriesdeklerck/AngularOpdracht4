import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularOpdracht';

  clicked(sport: any) {
    alert('hello world from app component');
    console.log(sport);
  }
}
