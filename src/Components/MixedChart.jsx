import React, {Component} from 'react'
import Chart from 'chart.js'

export default class MixedChart extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        const node = this.node
        
        var mixedChart = new Chart(node, {
            type: 'bar',
            data: {
                labels: ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4', 'Cat 5'],
                datasets: [
                    {
                        yAxisID: 'total',
                        label: 'Quantidade',
                        data: [8, 3, 2, 1, 1],
                        backgroundColor: '#F08000',
                        order: 2
                    },
                    {
                        yAxisID: 'percentage',
                        label: 'Porcentagem',
                        data: [54, 74, 87, 94, 100],
                        type: 'line',
                        borderColor: '#3050F0',
                        backgroundColor: '#00000000',
                        order: 1
                    }
                ]
            },
            options: {
                events: ['mousemove'],
                scales: {
                    yAxes: [
                        { 
                            id: 'total',
                            ticks: {
                                beginAtZero: true
                            }
                        },
                        {
                            id: 'percentage',
                            position: 'right',
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