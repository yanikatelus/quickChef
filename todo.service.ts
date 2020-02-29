import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    public todos = ['Rice', 'Green Beans', 'Plantain'];

    constructor() {
    }

    public getTodos() {
        return this.todos;
    }

}