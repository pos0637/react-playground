
import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, PageHeader, Tabs, Tab } from 'react-bootstrap';
import BurgerMenu from 'react-burger-menu';
import BaseComponent from '../../components/baseComponent';
import CircuitGridView from '../circuitGridView';
import './menu.less';

export default class MainView extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const Menu = BurgerMenu['pushRotate'];

        return (
            <div id="outer-container" style={{ height: '100%' }}>
                <Menu id={'slide'} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
                    <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x" /><span>Sidebar</span></h2>
                    {this._getMenus()}
                </Menu>
                <div id="page-wrap" style={styles.main}>
                    <div style={styles.header}>
                        <Navbar>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="#" style={styles.title}>南都蓄电池生产系统</a>
                                </Navbar.Brand>
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <NavItem eventKey={1} href="#">Link</NavItem>
                                    <NavItem eventKey={2} href="#">Link</NavItem>
                                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                        <MenuItem eventKey={3.1}>Action</MenuItem>
                                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                    </NavDropdown>
                                </Nav>
                                <Nav pullRight>
                                    <NavItem eventKey={1} href="#">Link Right</NavItem>
                                    <NavItem eventKey={2} href="#">Link Right</NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div>
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="回路网格"><CircuitGridView /></Tab>
                            <Tab eventKey={2} title="回路列表">Tab 2 content</Tab>
                        </Tabs>
                    </div>
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
        marginRight: 10
    },
    title: {
        paddingLeft: 60
    },
    main: {
        height: '100%',
        overflow: 'hidden'
    }
};