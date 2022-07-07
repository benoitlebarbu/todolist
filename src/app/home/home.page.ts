import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate: string;
  isOpen: boolean = false;
  tasks: any[] = [];
  newTask: string;
  
  constructor() {
    const date = new Date();
  this.currentDate = date.toLocaleDateString('fr-FR');
  }

  addNewTask() {
    var task = {
      isChecked: false,
      content : this.newTask
    }
    this.newTask = '';
    this.tasks.push(task);
  }

  onCheck(event, i) {
    this.tasks[i].isChecked = event.detail.checked;
  }
  deleteTask(i) {
    this.tasks.splice(i, 1)
  }
}
