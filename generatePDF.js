var pdf = require('pdfkit');
var fs = require('fs');

module.exports = {
  generatePDF:(iou) => {
    console.log(iou);
    var myDoc = new pdf;
    myDoc.pipe(fs.createWriteStream('node' + iou.userId + '.pdf'));
    myDoc.font('Times-Roman')
        .fontSize(14)
        .text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl.',
        100,100);

    myDoc.end();
  }
}
