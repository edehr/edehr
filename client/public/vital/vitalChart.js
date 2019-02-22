var chartTest
const INIT = 5

function doSomething() {
  function addData(numData, chart) {
    console.log('addData')
    var scrollChartAreaWrapper2 = document.getElementById('scrollChartAreaWrapper2')
    var scrollWidth = scrollChartAreaWrapper2.offsetWidth
    var newWidth = 0

    for (var i = 0; i < numData; i++) {
      let newLabel = 'Label' + i
      // console.log('add ', newLabel)
      let cd = chart.data
      let d = cd.datasets[0].data
      d.push(Math.random() * 100)
      // console.log('data', d)
      cd.labels.push(newLabel)
      newWidth +=60
      //var sourceCanvas = chartTest.chart.canvas
      //newwidth = sourceCanvas.offsetWidth + 60
      //sourceCanvas.style.width = newwidth + 'px'
    }
    scrollChartAreaWrapper2.style.width = (scrollWidth + newWidth) + 'px'
    chart.update()
  }
  addData(5, chartTest)
}

function vitalChartLoad(Chart) {
  function generateLabels() {
    console.log('generateLabels')
    var chartLabels = []
    for (let x = 0; x < INIT; x++) {
      chartLabels.push('Label' + x)
    }
    return chartLabels
  }

  function generateData() {
    console.log('generateData')
    var chartData = []
    for (let x = 0; x < INIT; x++) {
      chartData.push(Math.floor(Math.random() * 100 + 1))
    }
    return chartData
  }

  var chartData = {
    labels: generateLabels(),
    datasets: [
      {
        label: 'Test Data Set',
        data: generateData()
      }
    ]
  }
  console.log('chart data ready')

  function go() {
    console.log('create chart')
    var rectangleSet = false
    var canvasTest = document.getElementById('chart-Test').getContext('2d')
    var targetCtx = document.getElementById('axis-Test').getContext('2d')
    chartTest = new Chart(canvasTest, {
      type: 'bar',
      data: chartData,
      maintainAspectRatio: false,
      responsive: true,
      options: {
        tooltips: {
          titleFontSize: 0,
          titleMarginBottom: 0,
          bodyFontSize: 12
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              // ticks: {
              //   fontSize: 12,
              //   display: false
              // }
              ticks: {
                min: 0,
                max: 8,
                stepSize: 1,
                fixedStepSize: 1
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontSize: 12,
                beginAtZero: true
              }
            }
          ]
        },
        animation: {
          onComplete: function() {
            if (!rectangleSet) {
              console.log('on complete update the depend y axis chart')
              var scale = window.devicePixelRatio
              var sourceCanvas = chartTest.chart.canvas
              var sourceCtx = sourceCanvas.getContext('2d')
              var yscale = chartTest.scales['y-axis-0']
              var copyWidth = yscale.width - 10
              var copyHeight = yscale.height + yscale.top + 10
              targetCtx.scale(scale, scale)
              let dw = copyWidth * scale
              let dh = copyHeight * scale
              targetCtx.canvas.width = dw
              targetCtx.canvas.height = dh
              targetCtx.canvas.style.width = `${copyWidth}px`
              targetCtx.canvas.style.height = `${copyHeight}px`
              targetCtx.drawImage(sourceCanvas, 0, 0, dw, dh, 0, 0, dw, dh)
              // Normalize coordinate system to use css pixels.
              sourceCtx.clearRect(0, 0, copyWidth * scale, copyHeight * scale)
              rectangleSet = true
            }
          },
          onProgress: function() {
            if (rectangleSet === true) {
              console.log('on progress clear the source canvas y-axis')
              var yscale = chartTest.scales['y-axis-0']
              var copyWidth = yscale.width
              var copyHeight = yscale.height + yscale.top + 10
              var sourceCanvas = chartTest.chart.canvas
              var sourceCtx = sourceCanvas.getContext('2d')
              // console.log('clear width and hieght', copyWidth, copyHeight)
              sourceCtx.clearRect(0, 0, copyWidth, copyHeight)
            }
          }
        }
      }
    })
  }
  go()
}
