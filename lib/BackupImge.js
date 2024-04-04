const fs =  require('fs');
const imgPath = require('path').resolve(__dirname, '../public/Backups/image2.jpg-1609256669123.jpeg');
let imgdata = null;
fs.readFile(imgPath, (err, data) => {
    if (data) {
        imgdata = data.buffer;
    }
});

exports.BackUpImage = JSON.stringify(imgdata);
