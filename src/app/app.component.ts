import { Component } from '@angular/core';

import { Thingtodo } from './thingstodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	thingstodo: Thingtodo[] = [
		new Thingtodo(1, "Spelunking", 3, 100),
		new Thingtodo(2, "Sleeping", 30, 0),
		new Thingtodo(3, "Go to a movie", 2, 10)
	];
}
