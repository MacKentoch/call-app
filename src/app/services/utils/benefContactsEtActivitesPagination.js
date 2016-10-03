export const numberSearchContactsEtActivitesResultPerPage = 50;

export const getCurrentSearchContactsEtActivitesResPageContent = (contactsEtActivites, page = 1, pageSize = numberSearchContactsEtActivitesResultPerPage, filter = '') => {
  if (!Array.isArray(contactsEtActivites)) {
    return [];
  }

  const total = contactsEtActivites.length;

  // /////////////////////////////////////////
  // 1) no pagination case
  // /////////////////////////////////////////
  if (total <= pageSize - 1) {
    if (filter.trim().length > 0) {
      // 1.a) with filter case:
      const regexFilter = new RegExp(filter, 'gi');
      return ContactsEtActivites
        .filter(
          dossier =>  regexFilter.test(dossier.numDossier)  ||
                      regexFilter.test(dossier.domaine)     ||
                      regexFilter.test(dossier.regime)      ||
                      regexFilter.test(dossier.societe)
        );
    } else {
      // 1.b) no filter case:
      return ContactsEtActivites;
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
    // 2.b) no filter case:
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
