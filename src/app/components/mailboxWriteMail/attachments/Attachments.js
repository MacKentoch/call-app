import React, { PropTypes } from 'react';
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
            case 'pdf':
              return (
                <Pdf
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'txt':
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
            case 'doc':
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
            case 'xls':
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
            case 'png':
              return (
                <Img
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'jpg':
              return (
                <Img
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'image/jpeg':
              return (
                <Img
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />                
              );
            case 'jpeg':
              return (
                <Img
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'bmp':
              return (
                <Img
                  key={idx}
                  type={type}
                  filename={filename}
                  filePath={filePath}
                  size={size}
                />
              );
            case 'zip':
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
      type: PropTypes.oneOf(['text/plain', 'zip', 'rar', '7zip', 'pdf', 'txt', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'png', 'image/jpeg', 'jpg', 'jpeg', 'bmp']),
      filename: PropTypes.string.isRequired,
      filePath: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired
    })
  )
};

export default Attachments;
