
import React, { Component } from 'react';

/**
 * 视图组件
 */
export default class View extends Component {
    static propTypes = {
        style: React.PropTypes.any,
        children: React.PropTypes.any
    };

    render() {
        return (
            <div style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}