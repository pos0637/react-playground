
import React from 'react';
import BaseComponent from '../../components/baseComponent';
import ColorBar from '../../components/business/colorBar';
import CircuitCell from '../../components/business/circuitCell';

export default class CircuitGridView extends BaseComponent {
    constructor(props) {
        super(props);

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
        let cells = [];

        for (let circuit of this.state.circuits) {
            cells.push(<CircuitCell key={circuit.name} circuit={circuit} />);
        }

        return (
            <div>
                <ColorBar />
                <div style={styles.grid}>
                    {cells}
                </div>
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

const styles = {
    grid: {
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        paddingTop: 10
    }
};