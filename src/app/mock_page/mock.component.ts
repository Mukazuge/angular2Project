import { Component } from '@angular/core';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html'
})

export class MockComponent {
  doMock() {
    console.log('we are mocking');
  }
}
