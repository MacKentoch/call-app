export const listMailsMock = {
  mailboxId: 1,
  mailboxName: 'boîte mail #',
  mails: [
    {
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
      hasAttachments: true
      // NOTE: body and attachments aren't supposed to be here but mailContent fetch

      // body: 'to be filled later',
      // attachments: [
      //   {
      //     type: 'pdf',
      //     filename: 'fake.pdf',
      //     filePath: '#',
      //     size: '1.23kb'
      //   },
      //   {
      //     type: 'doc',
      //     filename: 'fake.pdf',
      //     filePath: '#',
      //     size: '1.23kb'
      //   },
      //   {
      //     type: 'zip',
      //     filename: 'fake.zip',
      //     filePath: '#',
      //     size: '3.10kb'
      //   }
      // ]
    },
    {
      id: 2,
      notRead: true,
      receptionDate: '01/01/2016  08:23',
      from: {
        email: 'test2@from.test',
        name: 'person3'
      },
      to: {
        email: 'test4@to.test',
        name: 'person4'
      },
      subject: 'a nice email subject',
      hasAttachments: false
      // body: 'to be filled later',
      // attachments: [
      //   {
      //     type: 'zip',
      //     filename: 'fake.zip',
      //     filePath: '#',
      //     size: '3.10kb'
      //   }
      // ]
    },
    {
      id: 3,
      notRead: true,
      receptionDate: '01/01/2016  12:23',
      from: {
        email: 'test1@from.test',
        name: 'person1'
      },
      to: {
        email: 'test1@to.test',
        name: 'person2'
      },
      subject: 'a nice email subject',
      hasAttachments: false
      // body: 'to be filled later',
      // attachments: [
      //   {
      //     type: 'doc',
      //     filename: 'fake.pdf',
      //     filePath: '#',
      //     size: '1.23kb'
      //   }
      // ]
    },
    {
      id: 4,
      notRead: false,
      receptionDate: '01/01/2016  12:23',
      from: {
        email: 'test1@from.test',
        name: 'person1'
      },
      to: {
        email: 'test1@to.test',
        name: 'person2'
      },
      subject: 'a nice email subject',
      hasAttachments: false
      // body: 'to be filled later',
      // attachments: []
    },
    {
      id: 5,
      notRead: false,
      receptionDate: '01/01/2016  12:23',
      from: {
        email: 'test2@from.test',
        name: 'person3'
      },
      to: {
        email: 'test4@to.test',
        name: 'person4'
      },
      subject: 'a nice email subject with more than 50 characters to test truncation',
      hasAttachments: false
      // body: 'to be filled later',
      // attachments: []
    },
    {
      id: 6,
      notRead: false,
      receptionDate: '01/01/2016  12:23',
      from: {
        email: 'test1@from.test',
        name: 'person1'
      },
      to: {
        email: 'test1@to.test',
        name: 'person2'
      },
      subject: 'a nice email subject',
      hasAttachments: false
      // body: 'to be filled later',
      // attachments: []
    }
  ]
};
