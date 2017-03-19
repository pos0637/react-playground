
import React, { Component } from 'react';
import XImage from '../../xImage';

/**
 * 标题栏
 */
export default class TitleBar extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div style={styles.bar}>
                <div style={styles.logo}>
                    <XImage src={require('./logo.gif')} />
                </div>
            </div>
        );
    }
}

const styles = {
    bar: {
        display: 'flex',
        alignItems: 'center',
        height: 40
    },
    logo: {
        paddingLeft: 40
    }
};