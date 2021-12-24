import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: String = "club";
  // Data Binding : TS <=> HTML

  public users: String[] = ["ayoub", "imen", "emna", "houssem"];

  public delete(name: String): void {
    let indice = this.users.indexOf(name)
    this.users.splice(indice, 1)
  }

}
