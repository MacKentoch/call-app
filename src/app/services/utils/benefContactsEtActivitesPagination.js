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
      return contactsEtActivites
        .filter(
          contactsEtActivite =>   regexFilter.test(contactsEtActivite.numDossier)  ||
                                  regexFilter.test(contactsEtActivite.numFiche)
        );
    } else {
      // 1.b) no filter case:
      return contactsEtActivites;
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
    return contactsEtActivites
      .filter(
        contactsEtActivite =>   regexFilter.test(contactsEtActivite.numDossier)  ||
                                regexFilter.test(contactsEtActivite.numFiche)
      )
      .filter(
      (contactsEtActivite, contactsEtActiviteIdx) => {
        if (contactsEtActiviteIdx >= minIdx && contactsEtActiviteIdx <= maxIdx) {
          return true;
        }
        return false;
      }
    );
  } else {
    // 2.b) no filter case:
    return contactsEtActivites.filter(
      (contactsEtActivite, contactsEtActiviteIdx) => {
        if (contactsEtActiviteIdx >= minIdx && contactsEtActiviteIdx <= maxIdx) {
          return true;
        }
        return false;
      }
    );
  }
};

export const getSearchContactsEtActivitesResMinIndex = (contactsEtActivites, page = 1, pageSize = numberSearchContactsEtActivitesResultPerPage) => {
  if (!Array.isArray(contactsEtActivites)) {
    return 1;
  }

  const total   = contactsEtActivites.length;
  if (total <= pageSize - 1) {
    return 1;
  }

  return ((page - 1) * pageSize) + 1;
};

export const getSearchContactsEtActivitesResMaxIndex = (contactsEtActivites, page = 1, pageSize = numberSearchContactsEtActivitesResultPerPage) => {
  if (!Array.isArray(contactsEtActivites)) {
    return 1;
  }

  const total   = contactsEtActivites.length;
  if (total <= pageSize - 1) {
    return total;
  }

  return (page * pageSize);
};
