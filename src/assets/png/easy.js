// module.exports = async function prueba(){

console.log(__dirname);
const fs = require('fs');

function deleteFile() {
    return new Promise(resolve => {
        // fs.unlink('/home/luis/Descargas/portfoleo/my-portfoleo/src/assets/png/index.js', response => {
        fs.unlink('./index.js', response => {
            resolve(response);
        });
    });
}

function readDir() {
    return new Promise(resolve => {
        // fs.readdir("/home/luis/Descargas/portfoleo/my-portfoleo/src/assets/png/", function(err, files) {
        fs.readdir("./", function(err, files) {
            if (err) {
                console.log("ERROR TO ARRAGE FILES");
                resolve(err);
                return;
            }
            const filesWithoutThisFile = files.filter(animal => animal !== 'easy.js');
            resolve(filesWithoutThisFile);
        });
    }) 
}

const arrangeImport = (files)=> {
    const variables = [];
    for (let i = 0; i < files.length; i++) {
        variables[i] = `${files[i].replace('.', "")}`;
        variables[i] = `${variables[i].replace('-', "")}`;
        variables[i] = `${variables[i].replace('-', "")}`;
        variables[i] = `${variables[i].replace('mepng', "me")}`;
        variables[i] = `${variables[i].replace('backgroundintroductionpng', "backgroundIntroduction")}`;
        variables[i] = `${variables[i].replace('logodesarrollowebpng', "logoHeader")}`;
        variables[i] = `${variables[i].replace('backgroundsectiontwopng', "backgroundSectionTwo")}`;
        variables[i] = `${variables[i].replace('reactpng', "imgreact")}`;
    }
    for (let i = 0; i < files.length; i++) {
        variables[i] = `import ${variables[i]} from './${files[i]}';`;
    }
    // console.log(variables);
    return variables;
}

function appendImportData(responseArrangeImport) {
    return new Promise(resolve => {
        for (let i = 0; i < responseArrangeImport.length; i++) {
            // fs.appendFile('/home/luis/Descargas/portfoleo/my-portfoleo/src/assets/png/index.js', responseArrangeImport[i]+"\n", err => {
            fs.appendFile('./index.js', responseArrangeImport[i]+"\n", err => {
                if (err) {
                    resolve(err);
                }
                resolve("ADDED IMPORTS TO FILE");
            });
        }
    })
}

function arrangeExportData(responseArrangeImport) {
    for (let i = 0; i < responseArrangeImport.length; i++) {
        responseArrangeImport[i] = `${responseArrangeImport[i].replace('.', "")}`;
        responseArrangeImport[i] = `${responseArrangeImport[i].replace('.', "")}`;
        responseArrangeImport[i] = `${responseArrangeImport[i].replace('.', "")}`;
        responseArrangeImport[i] = `${responseArrangeImport[i].replace('-', "")}`;
        responseArrangeImport[i] = `${responseArrangeImport[i].replace('-', "")}`;
        responseArrangeImport[i] = `${responseArrangeImport[i].replace('-', "")}`;
        responseArrangeImport[i] = `${responseArrangeImport[i].replace('mepng', "me")}`;
        responseArrangeImport[i] = `${responseArrangeImport[i].replace('backgroundintroductionpng', "backgroundIntroduction")}`;
        responseArrangeImport[i] = `${responseArrangeImport[i].replace('logodesarrollowebpng', "logoHeader")}`;
        responseArrangeImport[i] = `${responseArrangeImport[i].replace('backgroundsectiontwopng', "backgroundSectionTwo")}`;
        responseArrangeImport[i] = `${responseArrangeImport[i].replace('reactpng', "imgreact")}`;
    }
    
    const image = `const image = {${responseArrangeImport.map( value => `\n${value}`)}};\nexport {image};`;
    // console.log(image);
    return image;
}

function appendExportData(responseArrangeExportData) {
    // console.log(responseArrangeExportData);
    return new Promise(resolve => {
        // fs.appendFile('/home/luis/Descargas/portfoleo/my-portfoleo/src/assets/png/index.js', responseArrangeExportData, err => {
        fs.appendFile('./index.js', responseArrangeExportData, err => {
            if (err) {
                resolve(err);
            }
            resolve("ADDED EXPORT TO FILE");
        });
    });
}

// const folderPath = './';
const main = async () => {
    const responseDeleteFile = await deleteFile();
    console.log(responseDeleteFile === null ? "DELETED" : "ERROR TO DELETE FILE");
    const responseReadDir = await readDir();
    const responseArrangeImport = await arrangeImport(responseReadDir);
    const responseAppendImportData = await appendImportData(responseArrangeImport);
    const responseArrangeExportData = await arrangeExportData(responseReadDir);
    const responseAppendExportData = await appendExportData(responseArrangeExportData);
}
main();
// module.exports = {main};











// import me from "./me.png";
// import backgroundIntroduction from "./background-introduction.png";
// import logoHeader from "./logo-desarrollo-web.png";
// import backgroundSectionTwo from "./background-section-two.png";
// import imgreact from './react.png';

// const image = {
//     me,
//     backgroundIntroduction,
//     logoHeader,
//     backgroundSectionTwo,
//     imgreact,
// }

// export {image};
// }