import { Component } from '@angular/core';

// Component decorator declares this as a component
// Specify where our html page is and where the css file is
@Component({
  // selector is basically what we would put in a different html page in order to render this component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// In this class, we can set up fields, methods, whatever we need to set up the logic of the component
export class AppComponent {
  title = 'pet-app';
}
