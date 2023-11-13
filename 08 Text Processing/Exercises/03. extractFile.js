function extractFile(line) {

    let splited = line.split("\\").pop();

    let index = splited.lastIndexOf('.')
    let extension = splited.substring(index + 1)
    let file = splited.substring(0, index)
    
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')