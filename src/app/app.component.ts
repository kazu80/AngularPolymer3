import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
    // templateUrl: './app.component.html',
    template: `
        ccc{{isClick}}
        <kazu-polymer [(isClick)]="isClick"></kazu-polymer>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title   = 'app';
    isClick = false;

    click() {
        // this.isClick = !this.isClick;
    }
}
