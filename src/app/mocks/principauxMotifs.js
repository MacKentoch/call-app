import { getLastThreeMonthNames } from '../services/utils/dateTools';

const motifs = ['Dec', 'Modification', 'Calcul', 'Reversion', 'Autres'];

export const principauxmotifs =  {
  labels: motifs,
  datasets: [
    {
      label: getLastThreeMonthNames()[0],
      fillColor: 'rgba(217,30,24,0.2)',
      strokeColor: 'rgba(217,30,24,1)',
      pointColor: 'rgba(217,30,24,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(217,30,24,1)',
      data: [65, 59, 80, 10, 50]
    },
    {
      label: getLastThreeMonthNames()[1],
      fillColor: 'rgba(31,58,147,0.2)',
      strokeColor: 'rgba(31,58,147,1)',
      pointColor: 'rgba(31,58,147,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(31,58,147,1)',
      data: [28, 48, 40, 51, 28]
    },
    {
      label: getLastThreeMonthNames()[2],
      fillColor: 'rgba(51,110,123,0.2)',
      strokeColor: 'rgba(51,110,123,1)',
      pointColor: 'rgba(51,110,123,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(51,110,123,1)',
      data: [28, 48, 40, 11, 48]
    }
  ]
};
