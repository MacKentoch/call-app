import moment from 'moment';

moment.locale('fr');

// retourne un array des 3 derniers mois (en lettre FR) (mois en court compris)
export const getLastThreeMonthNames = () => {
  return [0, 1, 2].map(
    delta => moment().add(delta, 'months').format('MMMM')
  );
};
