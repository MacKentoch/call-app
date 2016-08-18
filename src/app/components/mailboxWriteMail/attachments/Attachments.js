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
          ({type, filePath, filename, size}, idx) => {
            switch (type) {
            case 'pdf' || 'application/pdf':
              return (
                <Pdf
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'txt' || 'text/plain':
              return (
                <Txt
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'text/plain':
              return (
                <Txt
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'doc' || 'application/msword':
              return (
                <Doc
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'docx':
              return (
                <Doc
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'xls' || 'application/excel' || 'application/vnd.ms-excel' || 'application/x-excel' || 'application/x-msexcel' :
              return (
                <Xls
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'xlsx':
              return (
                <Xls
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'csv':
              return (
                <Csv
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'png' || 'image/png':
              return (
                <Img
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'jpg' || 'jpeg' || 'image/jpeg' || 'image/pjpeg' :
              return (
                <Img
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'bmp' || 'image/bmp' || 'image/x-windows-bmp' :
              return (
                <Img
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'zip' || 'application/x-compressed' || 'application/x-zip-compressed' || 'application/zip' || 'multipart/x-zip' :
              return (
                <Zip
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case '7zip':
              return (
                <Zip
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'rar':
              return (
                <Zip
                  key={idx}
                  type={type}
                  filename={filename}
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
      filename: PropTypes.string.isRequired,
      filePath: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired
    })
  )
};

export default Attachments;
