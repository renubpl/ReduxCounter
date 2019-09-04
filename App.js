import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './component/reducers/index';
import CounterAction from './component/actions/CounterAction';

export default class App extends Component {
  constructor(props){
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <CounterAction />
            </Provider>
        );
    }
}