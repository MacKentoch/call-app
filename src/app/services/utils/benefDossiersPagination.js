export const numberSearchDossiersResultPerPage = 50;

export const getCurrentSearchDossiersResPageContent = (dossiers, page = 1, pageSize = numberSearchDossiersResultPerPage, filter = '') => {
  if (!Array.isArray(dossiers)) {
    return [];
  }

  const total = dossiers.length;

  // no pagination case
  if (total <= pageSize - 1) {
    if (filter.trim().length > 0) {
      const regexFilter = new RegExp(filter, 'gi');
      return dossiers
        .filter(
          dossier =>  regexFilter.test(dossier.numDossier)  ||
                      regexFilter.test(dossier.domaine)     ||
                      regexFilter.test(dossier.regime)      ||
                      regexFilter.test(dossier.societe)
        );
    } else {
      return dossiers;
    }
  }

  const minIdx  = (page - 1) * pageSize;
  const maxIdx  = (page * pageSize) - 1;
  // pagination case
  if (filter.trim().length > 0) {
    const regexFilter = new RegExp(filter, 'gi');
    return dossiers
      .filter(
        dossier =>  regexFilter.test(dossier.numDossier)  ||
                    regexFilter.test(dossier.domaine)     ||
                    regexFilter.test(dossier.regime)      ||
                    regexFilter.test(dossier.societe)
      )
      .filter(
      (dossier, dossierIdx) => {
        if (dossierIdx >= minIdx && dossierIdx <= maxIdx) {
          return true;
        }
        return false;
      }
    );
  } else {
    return dossiers.filter(
      (dossier, dossierIdx) => {
        if (dossierIdx >= minIdx && dossierIdx <= maxIdx) {
          return true;
        }
        return false;
      }
    );
  }
};

export const getSearchDossiersResMinIndex = (dossiers, page = 1, pageSize = numberSearchDossiersResultPerPage) => {
  if (!Array.isArray(dossiers)) {
    return 1;
  }

  const total   = dossiers.length;
  if (total <= pageSize - 1) {
    return 1;
  }

  return ((page - 1) * pageSize) + 1;
};

export const getSearchDossiersResMaxIndex = (dossiers, page = 1, pageSize = numberSearchDossiersResultPerPage) => {
  if (!Array.isArray(dossiers)) {
    return 1;
  }

  const total   = dossiers.length;
  if (total <= pageSize - 1) {
    return total;
  }

  return (page * pageSize);
};
