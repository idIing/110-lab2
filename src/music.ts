let musicList = ["'Uptown Funk' - Mark Ronson feat. Bruno Mars",
                 "'I Gotta Feeling' - Black Eyed Peas",
                 "'Dancing Queen' - ABBA",
                 "'Don't Stop 'Til You Get Enough' - Michael Jackson",
                 "'Celebration' - Kool & The Gang",
                 "'I Wanna Dance with Somebody (Who Loves Me)' - Whitney Houston"];

export function outputMusic() {
    console.log("Music for the party:");
    for (song of musicList) {
        console.log(song);
    }
}
