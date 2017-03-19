
import React, { Component } from 'react';

/**
 * 图片控件
 */
export default class XImage extends Component {
    static propTypes = {
        src: React.PropTypes.any,
        alt: React.PropTypes.string
    };

    static defaultProps = {
        src: undefined,
        alt: ''
    };

    render() {
        return (
            <img src={this.props.src} alt={this.props.alt} />
        );
    }
}
