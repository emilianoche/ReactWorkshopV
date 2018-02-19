import React from 'react';
import Songs from './Songs';

export default function (props) {

    const DUMMY_GENRE_NAME = props.genreName;
    const DUMMY_SONGS = props.songs
    const DUMMY_CURRENT_SONG = props.currentSong;
    const DUMMY_START = props.start

    return (
        <div>
            <h3>{DUMMY_GENRE_NAME} Station</h3>
            <Songs
                songs={DUMMY_SONGS}
                currentSong={DUMMY_CURRENT_SONG}
                start={DUMMY_START}
            />
        </div>
    );
}