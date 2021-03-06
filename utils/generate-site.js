const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if error reject promise and send err to the promise
            if (err) {
                reject(err);
                // return out of the function
                return;
            }

            // if all good resolve promise
            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            })
        })
    })
}

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};