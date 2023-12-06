function bookShelf(params) {

    let shelfs = {};
    let books = {};

    for (const line of params) {

        if (line.includes(' -> ')) {
            let [id, genre] = line.split(' -> ');

            if (id in shelfs) {
                shelfs += {id,  genre};
            } else {
                shelfs = {id,  genre};
            }

        } else if (line.includes(': ')) {
            let [title, info] = line.split(': ');
            let [author, genre] = info.split(', ');
            if (shelfs.hasOwnPorperty(genre)) {

            }
        }
    }


}
bookShelf([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);

bookShelf();