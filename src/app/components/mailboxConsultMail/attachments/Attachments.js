import React, { PropTypes } from 'react';
import { appConfig }        from '../../../config';
import Pdf                  from './pdf/Pdf';
import Txt                  from './txt/Txt';
import Doc                  from './doc/Doc';
import Xls                  from './xls/Xls';
import Csv                  from './csv/Csv';
import Img                  from './img/Img';
import Zip                  from './zip/Zip';

const Attachments = ({attachments}) => {
  return (
    <ul className="mailbox-attachments clearfix">
      {
        attachments.map(
          ({type, filePath, name, size}, idx) => {
            switch (type) {

            case 'pdf':
            case 'application/pdf':
              return (
                <Pdf
                  key={idx}
                  type={type}
                  name={name}
                  filePath={filePath}
                  size={size}
                />
              );

            case 'txt':
            case 'text/plain':
              return (
                <Txt
                  key={idx}
                  type={type}
                  name={name}
                  filePath={filePath}
                  size={size}
                />
              );

            case 'doc':
            case 'application/msword':
            case 'docx':
              return (
                <Doc
                  key={idx}
                  type={type}
                  name={name}
                  filePath={filePath}
                  size={size}
                />
              );

            case 'xls':
            case 'application/excel':
            case 'application/vnd.ms-excel':
            case 'application/x-excel':
            case 'application/x-msexcel':
            case 'xlsx':
              return (
                <Xls
                  key={idx}
                  type={type}
                  name={name}
                  filePath={filePath}
                  size={size}
                />
              );

            case 'csv':
              return (
                <Csv
                  key={idx}
                  type={type}
                  name={name}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'png':
            case 'image/png':
            case 'image/jpeg':
            case 'jpg':
            case 'jpeg':
            case 'image/pjpeg':
            case 'bmp':
            case 'image/bmp':
            case 'image/x-windows-bmp':
              return (
                <Img
                  key={idx}
                  type={type}
                  name={name}
                  filePath={filePath}
                  size={size}
                />
              );

            case 'zip':
            case 'application/x-compressed':
            case 'application/x-zip-compressed':
            case 'application/zip':
            case 'multipart/x-zip':
            case '7zip':
            case 'rar':
              return (
                <Zip
                  key={idx}
                  type={type}
                  name={name}
                  filePath={filePath}
                  size={size}
                />
              );

            default:
              return null;
            }
          }
        )
      }
    </ul>
  );
};

Attachments.propTypes = {
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(appConfig.fileMimeTypes),
      name: PropTypes.string.isRequired,
      filePath: PropTypes.string,
      size: PropTypes.any.isRequired
    })
  )
};

export default Attachments;
