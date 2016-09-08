export const numberSearchBenefResultPerPage = 50;

export const getCurrentSearchBenefResPageContent = (benefs, page = 1, pageSize = numberSearchBenefResultPerPage, filter = '') => {
  if (!Array.isArray(benefs)) {
    return [];
  }

  const total = benefs.length;
  // /////////////////////////////////////////
  // 1) no pagination case
  // /////////////////////////////////////////
  if (total <= pageSize - 1) {
    if (filter.trim().length > 0) {
      // 1.a) with filter case:
      const regexFilter = new RegExp(filter, 'gi');
      return benefs
        .filter(
          benef =>  regexFilter.test(benef.nom)           ||
                    regexFilter.test(benef.nomJeuneFille) ||
                    regexFilter.test(benef.prenom)        ||
                    regexFilter.test(benef.numss)
        );
    } else {
      // 1.b) no filter case:
      return benefs;
    }
  }

  const minIdx  = (page - 1) * pageSize;
  const maxIdx  = (page * pageSize) - 1;

  // /////////////////////////////////////////
  // 2) with pagination case
  // /////////////////////////////////////////
  if (filter.trim().length > 0) {
    // 2.a) with filter case:
    const regexFilter = new RegExp(filter, 'gi');
    return benefs
      .filter(
        benef =>  regexFilter.test(benef.nom)           ||
                  regexFilter.test(benef.nomJeuneFille) ||
                  regexFilter.test(benef.prenom)        ||
                  regexFilter.test(benef.numss)
      )
      .filter(
      (benef, benefIdx) => {
        if (benefIdx >= minIdx && benefIdx <= maxIdx) {
          return true;
        }
        return false;
      }
    );
  } else {
    // 2.b) no filter case:
    return benefs.filter(
      (benef, benefIdx) => {
        if (benefIdx >= minIdx && benefIdx <= maxIdx) {
          return true;
        }
        return false;
      }
    );
  }
};

export const getSearchBenefResMinIndex = (benefs, page = 1, pageSize = numberSearchBenefResultPerPage) => {
  if (!Array.isArray(benefs)) {
    return 1;
  }

  const total   = benefs.length;
  if (total <= pageSize - 1) {
    return 1;
  }

  return ((page - 1) * pageSize) + 1;
};

export const getSearchBenefResMaxIndex = (benefs, page = 1, pageSize = numberSearchBenefResultPerPage) => {
  if (!Array.isArray(benefs)) {
    return 1;
  }

  const total   = benefs.length;
  if (total <= pageSize - 1) {
    return total;
  }

  return (page * pageSize);
};
