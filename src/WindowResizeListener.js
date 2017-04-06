import { Component } from 'react';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';

export class WindowResizeListener extends Component {

  state = {
    height: window.innerHeight,
    width: window.innerWidth
  }

  componentDidMount() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(100)
      .filter(event => this.state.height < event.target.innerHeight || this.state.width < event.target.innerWidth)
      .subscribe((event) => {
        this.setState({
          height: Math.max(this.state.height, event.target.innerHeight), 
          width:  Math.max(this.state.width, event.target.innerWidth)
        });
      });
  }

  render() {
    return this.props.children(this.state);
  }
}
