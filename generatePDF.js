var pdf = require('pdfkit');
var fs = require('fs');

module.exports = {
  generatePDF:(iou) => {
    var myDoc = new pdf;
    myDoc.pipe(fs.createWriteStream('node' + iou.userId + '.pdf'));
    myDoc.font('Times-Roman')
        .fontSize(48)
        .text('NodeJS PDF Document',100,100);

    myDoc.end();
  }
}
