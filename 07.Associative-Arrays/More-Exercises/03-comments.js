function comments(params) {

    let users = {};
    let articles = {};

    for (const line of params) {

        if (line.includes(':')) {

            let [param1, param2] = line.split(': ');
            let [userName, artName] = param1.split(' posts on ');
            let [title, content] = param2.split(', ');

            if (userName in users && artName in articles) {

                if ('title' in users[userName]) {
                    users[userName]['title'].push(title);
                    users[userName]['content'].push(content);
                } else {
                    users[userName][artName] = [title, content];
                    
                }

                articles[artName].push(userName);
            }

        } else {
            let [type, name] = line.split(' ');
            if (type == 'user') {
                users[name] = {};
            } else {
                articles[name] = [];
            }
        }
    }
    let artEntries = Object.entries(articles).sort((a, b) => b[1].length - a[1].length);

    for (const [artName, userN] of artEntries) {

        console.log(`Comments on ${artName}`);

        userN.sort((a, b) => a.localeCompare(b));

        for (const user of userN) {
            console.log(`--- From user ${user}: ${users[user][artName][0]} - ${users[user][artName][1]}`);
        }
    }
}

comments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])

// comments(['user Mark',
//     'Mark posts on someArticle: NoTitle, stupidComment',
//     'article Bobby',
//     'article Steven',
//     'user Liam',
//     'user Henry',
//     'Mark posts on Bobby: Is, I do really like them',
//     'Mark posts on Steven: title, Run',
//     'someUser posts on Movies: Like'])