import React, { Component } from 'react';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';

export class WindowResizeListener extends Component {

  state = {
    height: window.innerHeight,
    width: window.innerWidth
  }

  componentDidMount() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(250)
      .subscribe((event) => {
        this.windowResized(event);
      });
  }

  windowResized = (event) => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  render() {
    return this.props.children(this.state);
  }
}
