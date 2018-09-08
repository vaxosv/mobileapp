import { Component, Input } from '@angular/core';

/**
 * Generated class for the PostsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'posts',
  templateUrl: 'posts.html'
})
export class PostsComponent {
  @Input() likestatus: boolean;

  constructor() {}

}
