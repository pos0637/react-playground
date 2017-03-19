
import React, { Component } from 'react';
import { Dropdown } from 'amazeui-react';
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
                <div style={styles.title}>
                    蓄电池化成监控系统
                </div>
                <div style={styles.space}>
                </div>
                <div style={styles.userInfo}>
                    <Dropdown title="用户信息" btnStyle="primary">
                        <Dropdown.Item>修改密码</Dropdown.Item>
                        <Dropdown.Item>注销</Dropdown.Item>
                    </Dropdown>
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
    },
    title: {
        paddingLeft: 10,        
        fontSize: 24
    },
    space: {
        flexGrow: 1
    },
    userInfo: {
        paddingRight: 40
    }
};