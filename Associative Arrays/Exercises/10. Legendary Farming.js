function legendaryFarming(input) {
    let output = { 'shards': "Shadowmourne", 'fragments': "Valanyr", 'motes': "Dragonwrath" };
    let keyMaterials = { 'shards': 0, 'fragments': 0, 'motes': 0 };
    let junk = {};
    let element = input.split(' ');

    for (let i = 0; i < element.length; i += 2) {
        const quantity = Number(element[i]);
        const material = (element[i + 1]).toLowerCase();

        if (material in keyMaterials) {
            keyMaterials[material] += quantity;
        } else {
            if (material in junk) {
                junk[material] += quantity;
            } else {
                junk[material] = quantity;
            }
        }
        if (keyMaterials[material] >= 250) {
            console.log(`${output[material]} obtained!`);
            keyMaterials[material] = keyMaterials[material] - 250;
            break;
        }
    }

    let entries = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    for (const entry of entries) {
        console.log(`${entry[0]}: ${entry[1]}`)
    }
    let junkEntries = Object.entries(junk).sort();
    for (const [mtrl, qty] of junkEntries) {
        console.log(`${mtrl}: ${qty}`);
    }
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')