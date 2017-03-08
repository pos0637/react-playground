
import React, { Component } from 'react';
import View from '../../../components/view';

// 背景图片列表
const Backgrounds = [
    require('./01.png'),
    require('./02.png'),
    require('./03.png'),
    require('./04.png'),
    require('./05.png'),
    require('./06.png'),
    require('./07.png'),
];

/**
 * 回路信息单元组件
 */
export default class CircuitCell extends Component {
    static propTypes = {
        circuit: React.PropTypes.object.isRequired // 回路信息
    };

    static defaultProps = {
        circuit: {}
    };

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        let circuit = this.props.circuit;
        let style = Object.assign({}, styles.cell, { backgroundImage: 'url(' + Backgrounds[circuit.status] + ')' });

        return (
            <View style={style}>
                <View style={styles.title}>
                    {circuit.name}
                </View>
                <View style={styles.info}>
                    {circuit.voltage.toFixed(2)}V&nbsp;{circuit.current.toFixed(2)}A
                </View>
                <View style={styles.stageId}>
                    第{circuit.stageId}步
                </View>
                <View style={styles.stage}>
                    {circuit.stage}
                </View>
            </View>
        );
    }
}

const styles = {
    cell: {
        width: 144,
        height: 144,
        border: 'solid',
        borderWidth: 1,
        borderColor: '#dadada',
        borderRadius: 10,
        marginLeft: 9,
        marginTop: 9,
        marginRight: 9,
        marginBottom: 9,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#ffffff'
    },
    title: {
        height: 30,
        fontSize: 16,
        fontWeight: 600,
        paddingLeft: 5,
        paddingTop: 10
    },
    info: {
        fontSize: 12,
        fontWeight: 600,
        textAlign: 'center',
        paddingTop: 36,
        color: 'white'
    },
    stageId: {
        fontSize: 12,
        fontWeight: 600,
        textAlign: 'center',
        paddingTop: 22
    },
    stage: {
        fontSize: 12,
        fontWeight: 600,
        textAlign: 'center'
    }
};