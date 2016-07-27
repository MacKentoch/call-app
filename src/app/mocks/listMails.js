export const listMailsMock = {
  mailboxId: 1,
  mailboxName: 'boîte mail #1',
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
      body: 'to be filled later'
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
      body: 'to be filled later'
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
      body: 'to be filled later'
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
      body: 'to be filled later'
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
      body: 'to be filled later'
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
      body: 'to be filled later'
    }
  ]
};
