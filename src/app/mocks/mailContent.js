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
    body: `
    <h1>Hello John,</h1>

    <p>Keffiyeh blog actually fashion axe vegan, irony biodiesel. Cold-pressed hoodie chillwave put a bird
      on it aesthetic, bitters brunch meggings vegan iPhone. Dreamcatcher vegan scenester mlkshk. Ethical
      master cleanse <b>Bushwick, occupy Thundercats banjo cliche ennui farm-to-table mlkshk fanny pack
      gluten-free</b>. Marfa butcher vegan quinoa, bicycle rights disrupt tofu scenester chillwave 3 wolf moon
      asymmetrical taxidermy pour-over. <i>Quinoa tote bag fashion axe</i>, Godard disrupt migas church-key tofu
      blog locavore. Thundercats cronut polaroid Neutra tousled, meh food truck selfies narwhal American
      Apparel.</p>

    <h2><u>Note:</u></h2>
    <p>Raw denim McSweeney's bicycle rights, iPhone trust fund quinoa Neutra VHS kale chips vegan PBR&amp;B
      literally Thundercats +1. Forage tilde four dollar toast, banjo health goth paleo butcher. Four dollar
      toast Brooklyn pour-over American Apparel sustainable, lumbersexual listicle gluten-free health goth
      umami hoodie. Synth Echo Park bicycle rights DIY farm-to-table, retro kogi sriracha dreamcatcher PBR&amp;B
      flannel hashtag irony Wes Anderson. Lumbersexual Williamsburg Helvetica next level. Cold-pressed
      slow-carb pop-up normcore Thundercats Portland, cardigan literally meditation lumbersexual crucifix.
      Wayfarers raw denim paleo Bushwick, keytar Helvetica scenester keffiyeh 8-bit irony mumblecore
      whatever viral Truffaut.</p>

    <p>Post-ironic shabby chic VHS, Marfa keytar flannel lomo try-hard keffiyeh cray. Actually fap fanny
      pack yr artisan trust fund. High Life dreamcatcher church-key gentrify. Tumblr stumptown four dollar
      toast vinyl, cold-pressed try-hard blog authentic keffiyeh Helvetica lo-fi tilde Intelligentsia. Lomo
      locavore salvia bespoke, twee fixie paleo cliche brunch Schlitz blog McSweeney's messenger bag swag
      slow-carb. Odd Future photo booth pork belly, you probably haven't heard of them actually tofu ennui
      keffiyeh lo-fi Truffaut health goth. Narwhal sustainable retro disrupt.</p>

    <p>Skateboard artisan letterpress before they sold out High Life messenger bag. Bitters chambray
      leggings listicle, drinking vinegar chillwave synth. Fanny pack hoodie American Apparel twee. American
      Apparel PBR listicle, salvia aesthetic occupy sustainable Neutra kogi. Organic synth Tumblr viral
      plaid, shabby chic single-origin coffee Etsy 3 wolf moon slow-carb Schlitz roof party tousled squid
      vinyl. Readymade next level literally trust fund. Distillery master cleanse migas, Vice sriracha
      flannel chambray chia cronut.</p>

    <p>Thanks,<br />Jane</p>
    `,
    hasAttachments: true,
    attachments: [
      {
        type: 'pdf',
        name: 'fake.pdf',
        filePath: '#',
        size: '1.23kb'
      },
      {
        type: 'doc',
        name: 'fake.doc',
        filePath: '#',
        size: '1.23kb'
      },
      {
        type: 'zip',
        name: 'fake.zip',
        filePath: '#',
        size: '3.10kb'
      }
    ]
  }
};
