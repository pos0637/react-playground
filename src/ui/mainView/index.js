
import React from 'react';
import { Tabs } from 'amazeui-react';
import BaseComponent from '../../components/baseComponent';
import TitleBar from '../../components/business/titleBar';
import CircuitGridView from '../circuitGridView';
import CircuitTableView from '../circuitTableView';
import './menu.less';

export default class MainView extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.main}>
                <div style={styles.header}>
                    <TitleBar />
                </div>
                <div>
                    <Tabs>
                        <Tabs.Item eventKey={1} title="回路网格"><CircuitGridView /></Tabs.Item>
                        <Tabs.Item eventKey={2} title="回路列表"><CircuitTableView /></Tabs.Item>
                    </Tabs>
                </div>
            </div>
        );
    }

    _getMenus() {
        return ([
            <a key="1" href=""><i className="fa fa-fw fa-database" /><span>Data Management</span></a>,
            <a key="2" href=""><i className="fa fa-fw fa-map-marker" /><span>Location</span></a>,
            <a key="3" href=""><i className="fa fa-fw fa-mortar-board" /><span>Study</span></a>,
            <a key="4" href=""><i className="fa fa-fw fa-picture-o" /><span>Collections</span></a>,
            <a key="5" href=""><i className="fa fa-fw fa-money" /><span>Credits</span></a>
        ]);
    }
}

const styles = {
    header: {
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10
    },
    title: {
        paddingLeft: 60
    },
    main: {
        height: '100%',
        overflow: 'hidden'
    }
};