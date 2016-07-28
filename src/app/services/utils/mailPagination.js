export const numberMailsPerPage = 50;

export const getCurrentPageContent = (mails, page = 1, pageSize = numberMailsPerPage) => {
  if (!Array.isArray(mails)) {
    return [];
  }

  const total   = mails.length;
  if (total <= pageSize - 1) {
    return mails;
  }

  const minIdx  = (page - 1) * pageSize;
  const maxIdx  = (page * pageSize) - 1;
  return mails.filter(
    (mail, mailIdx) => {
      if (mailIdx >= minIdx && mailIdx <= maxIdx) {
        return true;
      }
      return false;
    }
  );
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
