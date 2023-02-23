import React from 'react'

import Chart from 'react-apexcharts'

import './RobotLocationChart.css'

import { useState } from 'react'

export const RobotLocationChart = () => {

    const [xcoords, setxcoords] = useState([1, 2, 3, 4]);
    const [w, setW] = useState([100, 90, 80, 70]);
    const [x, setX] = useState([70, 80, 90, 100]);
    const [y, setY] = useState([]);
    const [z, setZ] = useState([]);

    let w_series = [
        {
            name: "Guests",
            data: w,
        },
    ];
  let w_series_options = {
    chart: {
      id: "w_series",
      group: "w_series",
      background: '#D3D3D3'
    },
    xaxis: {
      categories: xcoords,
    },
  };
  let x_series = [
    {
      name: "Subs",
      data: x,
    },
  ];
  let x_series_options = {
    chart: {
      id: "x_series",
      group: "x_series_options",
      background: '#D3D3D3'
    },
    xaxis: {
      categories: xcoords,
    },
  };
  return (
    <div className='chart_row'>
        <div className='chart_column'>
            <Chart type="line" series={w_series} options={w_series_options} width={600} />
            <Chart type="line" series={x_series} options={x_series_options} width={600} />
        </div>
        <div className='chart_column'>
            <Chart type="line" series={w_series} options={w_series_options} width={600} />
            <Chart type="line" series={x_series} options={x_series_options} width={600} />
        </div>

        <button onClick={() => {
            setxcoords([3, 4, 5, 6])
            setW(w.reverse())
            setX(x.reverse())
        }}>CLICK ME</button>
    </div>
  );
}

// class App extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         options: {
//           chart: {
//             id: 'apexchart-example'
//           },
//           xaxis: {
//             categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//           }
//         },
//         series: [{
//           name: 'series-1',
//           data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//         }]
//       }
//     }
//     render() {
//       return (
//         <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
//       )
//     }
//   }