import moment from 'moment';

moment.locale('fr');

// retourne un array des 3 derniers mois (en lettre FR) (mois en court compris)
export const getLastThreeMonthNames = () => {
  return [2, 1, 0].map(
    delta => moment().subtract(delta, 'months').format('MMMM')
  );
};
