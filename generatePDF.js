var pdf = require('pdfkit');
var fs = require('fs');

module.exports = {
  generatePDF:(iou) => {
    console.log(iou);
    var myDoc = new pdf;
    myDoc.pipe(fs.createWriteStream('node.pdf'));
    myDoc.font('Times-Roman')
        .fontSize(14)
        .text('Borrower: '+ iou.borrower +'\nLender: '+ iou.lender +'\n' + 'Value: '+ iou.value+ '\nUser ID: '+ iou.userId,
        100,100);

    myDoc.end();
  }
}
