import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // <-- plural and correct
})
export class AppComponent {
  title = 'event-binding';

  display(msg: string) {
    alert('Click event is ' + msg);
  }
}
