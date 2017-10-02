import {Component, OnInit} from '@angular/core';

@Component({
  selector     : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    num   = 0;

    ngOnInit(): void {
        const up_down = document.getElementById('up-down');

        up_down.addEventListener('up_val', (e) => {
            if (this.num < 10) {
                this.num = this.num + 1;
            }
        });

        up_down.addEventListener('down_val', (e) => {
            if (this.num > 0) {
                this.num = this.num - 1;
            }
        });

        /*
        const kazu = document.getElementById('foo');

        kazu.addEventListener('kick', function (e) {
            console.log('kick!!!');
        });
        */
    }
}
