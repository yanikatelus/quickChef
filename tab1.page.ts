import { Component, NgZone } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  public todos = ['Rice', 'Green Beans', 'Plantain'];

  constructor( public alertController: AlertController, private _ngZone: NgZone ) {}

     async presentAddNewPrompt() {
        console.log('It works so far!');
        const addTodoAlert = await this.alertController.create(
            {
                header: 'Add an Item',
                message: 'Enter your item',
                inputs: [
                    {
                        type: 'text',
                        name: 'newTodoItem',
                        placeholder: 'New Item'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'OK',
                        handler: (inputData) => {
                            let todo;
                            if (inputData.newTodoItem) {
                                todo = inputData.newTodoItem.trim();
                                if (todo !== '') {
                                    // Why are we wrapping this into NgZone.run function?
                                    this._ngZone.run(() => {
                                        this.todos.push(todo);
                                    });
                                } else {
                                    console.log('The input string is empty.');
                                }
                            } else {
                                console.log('The input string is not set.');
                            }
                            return todo;
                        }
                    }
                ]
            });
        await addTodoAlert.present();
    }

    removeTodo(todo: string){
      console.log("todo = "+todo);
      let index = this.todos.indexOf(todo);
      console.log("index of = "+index);
      this.todos.splice(index,1);
    }
}
