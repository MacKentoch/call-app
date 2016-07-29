import React, { PropTypes } from 'react';
import Title                from './title/Title';
import Tools                from './tools/Tools';
import MailInfo             from './mailInfo/MailInfo';

const MailboxConsultMail = ({}) => {
  return (
    <div className="panel">
      <div
        className="panel-body"
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: '10px',
          paddingRight: '10px'
        }}>
        <div>
          <Title />
          <div className="box-body no-padding">
            <Tools />
            <MailInfo />
            <div className="mailbox-read-message">
              <p>Hello John,</p>

              <p>Keffiyeh blog actually fashion axe vegan, irony biodiesel. Cold-pressed hoodie chillwave put a bird
                on it aesthetic, bitters brunch meggings vegan iPhone. Dreamcatcher vegan scenester mlkshk. Ethical
                master cleanse Bushwick, occupy Thundercats banjo cliche ennui farm-to-table mlkshk fanny pack
                gluten-free. Marfa butcher vegan quinoa, bicycle rights disrupt tofu scenester chillwave 3 wolf moon
                asymmetrical taxidermy pour-over. Quinoa tote bag fashion axe, Godard disrupt migas church-key tofu
                blog locavore. Thundercats cronut polaroid Neutra tousled, meh food truck selfies narwhal American
                Apparel.</p>

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
            </div>
            {/*<!-- /.mailbox-read-message -->*/}
          </div>
          {/*<!-- /.box-body -->*/}
          <div className="box-footer">
            <ul className="mailbox-attachments clearfix">

              <li>
                <span className="mailbox-attachment-icon">
                  <i className="fa fa-file-pdf-o"></i>
                </span>
                <div className="mailbox-attachment-info">
                  <a
                    href="#"
                    className="mailbox-attachment-name">
                    <i className="fa fa-paperclip"></i>
                    &nbsp;
                    Sep2014-report.pdf
                  </a>
                  <span className="mailbox-attachment-size">
                    1,245 KB
                    <a
                      href="#"
                      className="btn btn-default btn-xs pull-right">
                      <i className="fa fa-cloud-download"></i>
                    </a>
                  </span>
                </div>
              </li>

              <li>
                <span className="mailbox-attachment-icon">
                  <i className="fa fa-file-word-o"></i>
                </span>
                <div className="mailbox-attachment-info">
                  <a
                    href="#"
                    className="mailbox-attachment-name">
                    <i className="fa fa-paperclip"></i>
                    &nbsp;
                    App Description.docx
                  </a>
                  <span className="mailbox-attachment-size">
                    1,245 KB
                    <a
                      href="#"
                      className="btn btn-default btn-xs pull-right">
                      <i className="fa fa-cloud-download"></i>
                    </a>
                  </span>
                </div>
              </li>

              <li>
                <span className="mailbox-attachment-icon has-img">
                  <img
                    src="../../dist/img/photo1.png"
                    alt="Attachment"
                  />
                </span>

                <div className="mailbox-attachment-info">
                  <a
                    href="#"
                    className="mailbox-attachment-name">
                    <i className="fa fa-camera"></i>
                    &nbsp;
                    photo1.png
                  </a>
                  <span className="mailbox-attachment-size">
                    2.67 MB
                    <a
                      href="#"
                      className="btn btn-default btn-xs pull-right">
                      <i className="fa fa-cloud-download"></i>
                    </a>
                  </span>
                </div>
              </li>

              <li>
                <span className="mailbox-attachment-icon has-img">
                  <img
                    src="../../dist/img/photo2.png"
                    alt="Attachment"
                  />
                </span>
                <div className="mailbox-attachment-info">
                  <a
                    href="#"
                    className="mailbox-attachment-name">
                    <i className="fa fa-camera"></i>
                    &nbsp;
                    photo2.png
                  </a>
                  <span className="mailbox-attachment-size">
                    1.9 MB
                    <a
                      href="#"
                      className="btn btn-default btn-xs pull-right">
                      <i className="fa fa-cloud-download"></i>
                    </a>
                  </span>
                </div>
              </li>

            </ul>
          </div>
          {/*<!-- /.box-footer -->*/}
          <div className="box-footer">
            <div className="pull-right">

              <button
                type="button"
                className="btn btn-default">
                <i className="fa fa-reply"></i>
                &nbsp;
                Répondre
              </button>

              <button
                type="button"
                className="btn btn-default">
                <i className="fa fa-share"></i>
                &nbsp;
                Transférer
              </button>

            </div>

            <button
              type="button"
              className="btn btn-default">
              <i className="fa fa-trash-o"></i>
              &nbsp;
              Supprimer
            </button>

            <button
              type="button"
              className="btn btn-default">
              <i className="fa fa-print"></i>
              &nbsp;
              Imprimer
            </button>
          </div>
          {/*<!-- /.box-footer -->*/}
        </div>
        {/*<!-- /. box -->*/}
      </div>

      </div>
  );
};

MailboxConsultMail.propTypes = {
  mailboxId: PropTypes.string.isRequired,
  mailboxType: PropTypes.oneOf(['Reçus', 'Envoyés']).isRequired,
  mailBoxName: PropTypes.string.isRequired,
  mail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    notRead: PropTypes.bool.isRequired,
    receptionDate: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    from: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired,
    to: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired,
    body: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  })
};

export default MailboxConsultMail;
