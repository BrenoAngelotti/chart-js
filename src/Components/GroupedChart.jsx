import React, {Component} from 'react'
import Chart from 'chart.js'

export default class GroupedChart extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        const node = this.node
        
        var chart = new Chart(node, {
            type: 'bar',
            data: {
                labels: ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4', 'Cat 5'],
                datasets: [
                    {
                        yAxisID: 'total',
                        label: 'EGP',
                        data: [8, 1, 3, 0, -2],
                        backgroundColor: 'red'
                    },
                    {
                        yAxisID: 'total',
                        label: 'Gente',
                        data: [7, 3, 5, 1, 1],
                        backgroundColor: 'green'
                    },
                    {
                        yAxisID: 'total',
                        label: 'Mobile',
                        data: [2, 12, 2, 0, 1],
                        backgroundColor: 'blue'
                    },
                    {
                        yAxisID: 'total',
                        label: 'EEG',
                        data: [8, 8, 2, 0, 4],
                        backgroundColor: 'magenta'
                    },
                    {
                        yAxisID: 'total',
                        label: 'Mkt',
                        data: [0, 3, 2, 1, 1],
                        backgroundColor: 'yellow'
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        { 
                            id: 'total',
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        })
    }

    render(){
        return(
            <canvas
                ref={node => {this.node = node}} />
        )
    }
}