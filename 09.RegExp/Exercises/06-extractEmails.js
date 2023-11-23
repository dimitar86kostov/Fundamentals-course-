function extractEmails(params) {

    let splited = params.split(' ');
    let pattern = /^[a-z\d]+[.\-_]*[\d]*[a-z]*@[a-z]+[.-]*[a-z]+\.[a-z]+[.-]*[a-z]+/gm
    for (const word of splited) {
        let match = word.match(pattern);
        if (match) {
            console.log(match.join(''));
        }
    }
}
extractEmails('Please contact us at: support@github.com.')
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')