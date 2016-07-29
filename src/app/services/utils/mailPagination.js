export const numberMailsPerPage = 50;

export const getCurrentPageContent = (mails, page = 1, pageSize = numberMailsPerPage, filter = '') => {
  if (!Array.isArray(mails)) {
    return [];
  }

  const total = mails.length;
  // no pagination case
  if (total <= pageSize - 1) {
    if (filter.trim().length > 0) {
      const regexFilter = new RegExp(filter, 'gi');
      return mails
        .filter(
          mail => regexFilter.test(mail.from.name) || regexFilter.test(mail.subject)
        );
    } else {
      return mails;
    }
  }

  const minIdx  = (page - 1) * pageSize;
  const maxIdx  = (page * pageSize) - 1;
  // pagination case
  if (filter.trim().length > 0) {
    const regexFilter = new RegExp(filter, 'gi');
    return mails
      .filter(
        mail => regexFilter.test(mail.from.name) || regexFilter.test(mail.subject)
      )
      .filter(
      (mail, mailIdx) => {
        if (mailIdx >= minIdx && mailIdx <= maxIdx) {
          return true;
        }
        return false;
      }
    );
  } else {
    return mails.filter(
      (mail, mailIdx) => {
        if (mailIdx >= minIdx && mailIdx <= maxIdx) {
          return true;
        }
        return false;
      }
    );
  }
};


export const getMinIndex = (mails, page = 1, pageSize = numberMailsPerPage) => {
  if (!Array.isArray(mails)) {
    return 1;
  }

  const total   = mails.length;
  if (total <= pageSize - 1) {
    return 1;
  }

  return ((page - 1) * pageSize) + 1;
};

export const getMaxIndex = (mails, page = 1, pageSize = numberMailsPerPage) => {
  if (!Array.isArray(mails)) {
    return 1;
  }

  const total   = mails.length;
  if (total <= pageSize - 1) {
    return total;
  }

  return (page * pageSize);
};
