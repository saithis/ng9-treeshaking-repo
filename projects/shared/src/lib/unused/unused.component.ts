import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-unused',
  template: `
    <p>
      unused!
    </p>
  `,
  styles: []
})
export class UnusedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
