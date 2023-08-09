export const lineChartDataFailedStudents = [
  {
    name: 'Estudiantes Reprobados',
    data: [30, 40, 24, 46, 20, 46, 75],
  },
]

export const lineChartOptionsFailedStudents = {
  chart: {
    toolbar: {
      show: false,
    },
    parentHeightOffset: 0,
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: '#ee5d50',
    },
  },
  colors: ['#ee5d50'],
  markers: {
    size: 0,
    colors: 'white',
    strokeColors: '#ee5d50',
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: 'circle',
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: 'dark',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    type: 'line',
  },
  xaxis: {
    categories: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    labels: {
      style: {
        colors: '#A3AED0',
        fontSize: '12px',
        fontWeight: '500',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: true,
    },
  },
  yaxis: {
    show: false,
    // categories: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    // labels: {
    //   style: {
    //     colors: '#A3AED0',
    //     fontSize: '12px',
    //     fontWeight: '500',
    //   },
    // },
    // axisBorder: {
    //   show: false,
    // },
    // axisTicks: {
    //   show: true,
    // },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ['#ee5d50'],
      opacity: 0.5,
    },
  },
  color: ['#ee5d50'],
}
