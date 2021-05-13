import { Component } from '@angular/core';
import { Post } from './model/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-um';

  post?: Array<Post>;

  constructor() { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        this.post = json;
      }
      )
  }
}



