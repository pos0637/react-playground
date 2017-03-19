
import React from 'react';
import ReactDataGrid from 'react-data-grid';
import BaseComponent from '../../components/baseComponent';
import ColorBar from '../../components/business/colorBar';

export default class CircuitGridView extends BaseComponent {
    constructor(props) {
        super(props);

        this.mColumns = [
            { key: 'name', name: '回路名称' },
            { key: 'status', name: '状态' },
            { key: 'voltage', name: '组端电压' },
            { key: 'current', name: '电流' },
            { key: 'stageId', name: '化成步骤' },
            { key: 'stage', name: '化成阶段' }
        ];
            
        this.state = {
            circuits: []
        };
    }

    componentDidMount() {
        this._fetchDummyData();

        setInterval(() => {
            this._fetchDummyData();
        }, 1000);
    }

    render() {
        return (
            <div>
                <ColorBar />
                <ReactDataGrid
                    columns={this.mColumns}
                    rowGetter={(i) => { return this.state.circuits[i]; }}
                    rowsCount={this.state.circuits.length} />
            </div>
        );
    }

    _fetchDummyData() {
        let circuits = [];

        for (let i = 1; i < 10; ++i) {
            circuits.push({
                name: 'A' + i + '回路',
                status: parseInt(Math.random() * (6 - 0 + 1) + 0, 10),
                voltage: Math.random() * (20 - 0 + 1) + 0,
                current: Math.random() * (10 - 0 + 1) + 0,
                stageId: parseInt(Math.random() * (10 - 1 + 1) + 1, 10),
                stage: 'XX阶段'
            });
        }

        this.setState({
            circuits: circuits
        });
    }
}
