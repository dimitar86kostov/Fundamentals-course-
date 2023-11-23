function songs(arr) {
    let songs = [];

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time - time;
        }
    }

    let n = arr.shift();
    let last = arr.pop();

    for (const el of arr) {
        let [type, name, time] = el.split('_');

        let song = new Song(type, name, time);
        songs.push(song);

        if (last == 'all') {

           
            console.log(song.name);
           

        } else if (type == last) {

            
                console.log(song.name);
               
        }
    }

}

// songs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']
// );
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
)