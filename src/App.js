import React, { useState, useRef } from 'react'; 
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import data from './data';
import Library from './components/Library'
import Nav from './components/Nav'



function App() {
    //State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const [songInfo, setSongInfo] = useState({
      currentTime:0,
      duration:0,
    });

    const [libraryStatus, setLibraryStatus] = useState(false);


    const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({...songInfo, currentTime: current, duration})
    }

    const songEndHandler = async () => {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        if(isPlaying) audioRef.current.play();
    }



  return (
   <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
     <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
    <Song currentSong={currentSong} />
    <Player setCurrentSong={setCurrentSong} setSongs={setSongs} songs={songs} isPlaying={isPlaying} audioRef={audioRef} setIsPlaying={setIsPlaying} currentSong={currentSong} setSongInfo={setSongInfo} songInfo={songInfo} />
    <Library libraryStatus={libraryStatus} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} />
    <audio onEnded={songEndHandler} onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
   </div>
  );
}

export default App;
