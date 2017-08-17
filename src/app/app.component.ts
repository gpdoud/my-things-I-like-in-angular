import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Thingtodo } from './thingstodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	thingtodo: Thingtodo = new Thingtodo(0, '', 0, 0);

	thingstodo: Thingtodo[] = [
		new Thingtodo(1, "Spelunking", 3, 100),
		new Thingtodo(2, "Sleeping", 30, 0),
		new Thingtodo(3, "Go to a movie", 2, 10)
	];

	add(): void {
		console.log(this.thingtodo);
		let ttd = new Thingtodo(this.thingtodo.order, this.thingtodo.name,
										this.thingtodo.monthly, this.thingtodo.cost);
		this.thingstodo.push(ttd);
		this.thingtodo = new Thingtodo(0, '', 0, 0);
	}
}
