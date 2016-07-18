const cannaux = ['tel', 'email', 'courrier', 'sans'];

export const ficheparcanal = {
  labels: cannaux,

  datasets: [
    {
      data: [100, 200, 300, 40],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#BABECA"
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#BABECA"
      ]
    }
  ]
  //
  // datasets: [
  //   {
  //     label: 'Total',
  //     backgroundColor: 'rgba(31,58,147,0.8)',
  //     fillColor: 'rgba(31,58,147,0.4)',
  //     strokeColor: 'rgba(31,58,147,0.8)',
  //     pointColor: 'rgba(31,58,147,0.8)',
  //     pointStrokeColor: '#fff',
  //     pointHighlightFill: '#fff',
  //     pointHighlightStroke: 'rgba(31,58,147,0.8)',
  //     data: [65, 59, 80]
  //   },
  //   {
  //     label: 'Retard',
  //     backgroundColor: 'rgba(217,30,24,0.8)',
  //     fillColor: 'rgba(217,30,24,0.4)',
  //     strokeColor: 'rgba(217,30,24,0.8)',
  //     pointColor: 'rgba(217,30,24,0.8)',
  //     pointStrokeColor: '#fff',
  //     pointHighlightFill: '#fff',
  //     pointHighlightStroke: 'rgba(217,30,24,0.8)',
  //     data: [15, 9, 10]
  //   }
  // ]
};
