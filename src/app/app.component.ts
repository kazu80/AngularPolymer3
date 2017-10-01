import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
    // templateUrl: './app.component.html',
    template: `
        <kazu-polymer id="foo"></kazu-polymer>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title   = 'app';

    ngOnInit(): void {
        const kazu = document.getElementById('foo');

        kazu.addEventListener('kick', function (e) {
            console.log('kick!!!');
        });
    }
}
