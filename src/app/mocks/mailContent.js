export const mailContentMock = {
  mailboxId: 1,
  mailboxName: 'boîte mail #1',
  mail: {
    id: 1,
    notRead: true,
    receptionDate: '01/01/2016 12:23',
    from: {
      email: 'test1@from.test',
      name: 'person1'
    },
    to: {
      email: 'test1@to.test',
      name: 'person2'
    },
    subject: 'a nice email subject',
    body: 'to be filled later',
    hasAttachments: true,
    attachments: [
      {
        type: 'pdf',
        filename: 'fake.pdf',
        filePath: '#',
        size: '1.23kb'
      },
      {
        type: 'doc',
        filename: 'fake.pdf',
        filePath: '#',
        size: '1.23kb'
      },
      {
        type: 'zip',
        filename: 'fake.zip',
        filePath: '#',
        size: '3.10kb'
      }
    ]
  }
};
