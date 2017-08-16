export class Thingtodo {
	order: number;
	name: string;
	monthly: number;
	cost: number;

	constructor(order: number, name: string, monthly: number, cost: number) {
		this.order = order;
		this.name = name;
		this.monthly = monthly;
		this.cost = cost;
	}
}