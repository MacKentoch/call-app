export const numberMailsPerPage = 50;

export const getCurrentPageContent = (mails, page = 1, pageSize = numberMailsPerPage) => {
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
