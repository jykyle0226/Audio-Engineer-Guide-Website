// import React from "react";
// import Dropdown from "../../APIcomponents/Dropdown";
// import axios from "axios";
// import { Credentials } from "../../APIcomponents/Credentials";
// import { useState, useEffect } from "react";
// import Listbox from "../../APIcomponents/Listbox";
// import Detail from "../../APIcomponents/Detail";

// const Spotify = () => {
//   const spotify = Credentials();

//   console.log("RENDERING APP.JS");

//   const data = [
//     { value: 1, name: "A" },
//     { value: 2, name: "B" },
//     { value: 3, name: "C" },
//   ];

//   const [token, setToken] = useState("");
//   const [genres, setGenres] = useState({
//     selectedGenre: "",
//     listOfGenresFromAPI: [],
//   });
//   const [playlist, setPlaylist] = useState({
//     selectedPlaylist: "",
//     listOfPlaylistFromAPI: [],
//   });
//   const [tracks, setTracks] = useState({
//     selectedTrack: "",
//     listOfTracksFromAPI: [],
//   });
//   const [trackDetail, setTrackDetail] = useState(null);

//   useEffect(() => {
//     axios("https://accounts.spotify.com/api/token", {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         Authorization:
//           "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
//       },
//       data: "grant_type=client_credentials",
//       method: "POST",
//     }).then((tokenResponse) => {
//       setToken(tokenResponse.data.access_token);

//       axios("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
//         method: "GET",
//         headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
//       }).then((genreResponse) => {
//         setGenres({
//           selectedGenre: genres.selectedGenre,
//           listOfGenresFromAPI: genreResponse.data.categories.items,
//         });
//       });
//     });
//   }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

//   const genreChanged = (val) => {
//     setGenres({
//       selectedGenre: val,
//       listOfGenresFromAPI: genres.listOfGenresFromAPI,
//     });

//     axios(
//       `https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`,
//       {
//         method: "GET",
//         headers: { Authorization: "Bearer " + token },
//       }
//     ).then((playlistResponse) => {
//       setPlaylist({
//         selectedPlaylist: playlist.selectedPlaylist,
//         listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
//       });
//     });

//     console.log(val);
//   };

//   const playlistChanged = (val) => {
//     console.log(val);
//     setPlaylist({
//       selectedPlaylist: val,
//       listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI,
//     });
//   };

//   const buttonClicked = (e) => {
//     e.preventDefault();

//     axios(
//       `https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       }
//     ).then((tracksResponse) => {
//       setTracks({
//         selectedTrack: tracks.selectedTrack,
//         listOfTracksFromAPI: tracksResponse.data.items,
//       });
//     });
//   };

//   const listboxClicked = (val) => {
//     const currentTracks = [...tracks.listOfTracksFromAPI];

//     const trackInfo = currentTracks.filter((t) => t.track.id === val);

//     setTrackDetail(trackInfo[0].track);
//   };

//   return (
//     <div className="container">
//       <form onSubmit={buttonClicked}>
//         <Dropdown
//           label="Genre :"
//           options={genres.listOfGenresFromAPI}
//           selectedValue={genres.selectedGenre}
//           changed={genreChanged}
//         />
//         <Dropdown
//           label="Playlist :"
//           options={playlist.listOfPlaylistFromAPI}
//           selectedValue={playlist.selectedPlaylist}
//           changed={playlistChanged}
//         />
//         <div className="col-sm-6 row form-group px-0">
//           <button type="submit" className="btn btn-success col-sm-12">
//             Search
//           </button>
//         </div>
//         <div className="row">
//           <Listbox
//             items={tracks.listOfTracksFromAPI}
//             clicked={listboxClicked}
//           />
//           {trackDetail && <Detail {...trackDetail} />}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Spotify;

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const CLIENT_ID = "c8a2306be41f4413ad5578215afa8c04";
  const REDIRECT_URI = "https://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  // const getToken = () => {
  //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
  //     let token = urlParams.get('access_token');
  // }

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    // getToken()

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
  };

  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>Logout</button>
        )}

        {token ? (
          <form onSubmit={searchArtists}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type={"submit"}>Search</button>
          </form>
        ) : (
          <h2>Please login</h2>
        )}

        {renderArtists()}
      </header>
    </div>
  );
}

export default App;
