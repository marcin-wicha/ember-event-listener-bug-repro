import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationComponent extends Component {
  @tracked showRedBox = true;

  logOnClick() {
    console.log('The red box has been clicked');
  }

  @action
  toggleRedBox() {
    this.showRedBox = !this.showRedBox;
  }
}
