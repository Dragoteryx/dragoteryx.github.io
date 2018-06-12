import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide: boolean = false;
  title = "Drago's Lair";

  receive($event) {
    if ($event == "toggleHidden")
      this.hide = !this.hide;
  }
}
