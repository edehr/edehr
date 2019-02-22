let rawData = [
  { temperature: 35.5, label: 'Day 0\n18:00' },
  { temperature: 36, label: 'Day 0\n20:00' },
  { temperature: 36.4, label: 'Day 1\n02:00' },
  { temperature: 36.9, label: 'Day 1\n18:00' },
  { temperature: 37.1, label: 'Day 2\n07:30' },
  { temperature: 38, label: 'Day 2\n07:45' },
  { temperature: 39.4, label: 'Day 2\n08:05' },
  { temperature: 39.4, label: 'Day 3\n08:05' },
  { temperature: 39.4, label: 'Day 4\n08:05' }
]
function createDateData() {
  let dy = 0.5
  let dx = 0.5
  let dData = rawData.map((r, inx) => {
    return { x: inx + 1, y: dy, label: r.label }
  })
  let space = { x: dx, y: dy, label: '' }
  let rData = []
  rData.push(space)
  dData.forEach(d => {
    rData.push(d)
    dx += 1
    space = { x: dx, y: dy, label: '' }
    rData.push(space)
  })
  return rData
}
var upTick = new Image(20, 20)
// yourImage.src ='http://your.site.com/your_image.png';
upTick.src = 'http://localhost:28000/vital/upTick.png'
var imageData = {
  labels: ['Day 0', 'two', 'three', 'four'],
  datasets: [
    {
      label: 'dates',
      // set point sizes, doesn't work on images
      pointRadius: [10, 0, 10, 5],
      pointHoverRadius: 20,
      pointHitRadius: 20,
      pointStyle: ['rect', upTick, 'triangle', 'circle'],
      // demonstrates that non-image points can be rotated
      pointRotation: [30, 34, 55, 0],
      // color of the points that are not from images
      pointBackgroundColor: 'rgba(0,191,255)',
      // set a background color so data labels have area that obscures the grid lines
      backgroundColor: 'rgba(255,255,255)',
      data: [
        { x: 1, y: 1, label: 'Day 0\n18:00' },
        { x: 2, y: 1, label: 'Day 0\n20:00' },
        { x: 3, y: 1, label: 'Day 1\n02:00' },
        { x: 4, y: 1, label: 'Day 1\n18:00' }
      ]
    }
  ]
}

var commonData = {
  labels: ['Day 0', 'two', 'three', 'four'],
  datasets: [
    {
      label: 'dates',
      // set point sizes, doesn't work on images
      pointRadius: [10, 0, 10, 5],
      pointHoverRadius: 20,
      pointHitRadius: 20,
      pointStyle: ['rect', upTick, 'triangle', 'circle'],
      // demonstrates that non-image points can be rotated
      pointRotation: [30, 34, 55, 0],
      // color of the points that are not from images
      pointBackgroundColor: 'rgba(0,191,255)',
      // set a background color so data labels have area that obscures the grid lines
      backgroundColor: 'rgba(255,255,255)',
      data: [
        { x: 1, y: 1, label: 'Day 0\n18:00' },
        { x: 2, y: 1, label: 'Day 0\n20:00' },
        { x: 3, y: 1, label: 'Day 1\n02:00' },
        { x: 4, y: 1, label: 'Day 1\n18:00' }
      ]
    }
  ]
}
var dateData = {
  datasets: [
    {
      label: 'dates',
      // set point sizes, doesn't work on images
      pointRadius: 0,
      pointHoverRadius: 0,
      pointHitRadius: 0,
      // pointStyle: ['rect', upTick, 'triangle', 'circle'],
      // demonstrates that non-image points can be rotated
      // pointRotation: [30,34,55,0],
      // color of the points that are not from images
      pointBackgroundColor: 'rgba(0,191,255)',
      // set a background color so data labels have area that obscures the grid lines
      backgroundColor: 'rgba(255,255,255)',
      data: createDateData()
    }
  ]
}

var commonOptions = {
  // TODO do we need responsive and maintainAspectRatio?
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    // do not display legend at top of canvas
    display: false
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          color: 'rgba(0,0,0, 0.5)'
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          color: 'rgba(0,0,100, 0.5)'
        }
      }
    ]
  },
  tooltips: {
    // copied this from someplace ... need to explore what tool tips options are good to have
    mode: 'index',
    intersect: false
  }
}
var datesOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          // can customize the y-axis tick label font
          fontColor: '#291F3e',
          min: 1, // minimum will be 1, unless there is a lower value.
          max: 1,
          callback: function(value, index, values) {
            return null // hide the y axis labels and grid lines
          }
        }
      }
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'date chart'
        },
        // TODO look at using offsetscale
        ticks: {
          min: 0,
          stepSize: 0.5,
          suggestedMax: 5,
          callback: function(value, index, values) {
            console.log('xaxis value', value)
            if (value % 1 === 0) return null // don't show these grid lines
            return '' // hide the x axis label
          }
        }
      }
    ]
  },
  plugins: {
    datalabels: {
      align: 'end',
      anchor: 'end',
      // use the dataset background color in case it has been customized
      backgroundColor: function(context) {
        return context.dataset.backgroundColor
      },
      //
      borderRadius: 4,
      color: 'black',
      font: {
        size: '20'
      },
      formatter: function(value) {
        console.log('formatter', value.label)
        return value.label
      }
    }
  }
}
var tempuratureOptions = {
  // https://designs-n-graphics.info/wp-content/uploads/2018/07/vital-signs-normal-ranges-chart-normal-vital-sign-ranges-chart-138554.jpg

  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: '1k = 1000'
        },
        ticks: {
          // can customize the y-axis tick label font
          fontColor: '#291F3e',
          suggestedMin: 1, // minimum will be 1, unless there is a lower value.
          suggestedMax: 1,
          callback: function(value, index, values) {
            return value + '*' // can modify the label
          }
        }
      }
    ],
    xAxes: [
      {
        scaleLabel: {
          display: false,
          labelString: 'dates'
        },
        ticks: {
          callback: function(value, index, values) {
            console.log('ticks callback', value)
            return parseFloat(value).toFixed(2);
          },
          autoSkip: true,
          maxTicksLimit: 10,
          stepSize: .2
        }
        // ticks: {
        //   min: 0,
        //   max: 5,
        //   suggestedMax: 5,
        //   callback: function(value, index, values) {
        //     if (value % 1 === 0) return null // don't show these grid lines
        //     return '' // hide the x axis label
        //   }
        // }
      }
    ]
  },
  plugins: {
    datalabels: {
      align: 'end',
      anchor: 'end',
      // use the dataset background color in case it has been customized
      backgroundColor: function(context) {
        return context.dataset.backgroundColor
      },
      //
      borderRadius: 4,
      color: 'black',
      formatter: function(value) {
        console.log('formatter', value)
        return value.label
      }
    }
  }
}
function vitalChartLoad(Chart) {
  var dateTop = document.getElementById('dateTop').getContext('2d')
  new Chart(dateTop, {
    type: 'scatter',
    data: dateData,
    options: Object.assign(commonOptions, datesOptions)
  })
}
