import { useEffect, useState } from "react";
import axios from "axios";
import "../../Style/spotify.css";
function Spotify() {
  const CLIENT_ID = "c8a2306be41f4413ad5578215afa8c04";
  const REDIRECT_URI = "https://incandescent-stroopwafel-901f38.netlify.app/Spotify";
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
    const { data } = await axios.get(
      "https://api.spotify.com/v1/search?limit=3",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchKey,
          type: "artist",
        },
      }
    );

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
        <h1>Find your worship band!</h1>
        {!token ? (
          <button
            className="button-68"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </button>
        ) : (
          <button className="button-68" onClick={logout}>
            Logout
          </button>
        )}

        {token ? (
          <div className="searchbar-div">
            <form className="form" onSubmit={searchArtists}>
              <input
                className="spotify-input"
                type="text"
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <button id="search-button" className="button-68" type={"submit"}>
                Search
              </button>
            </form>
          </div>
        ) : (
          <h2>Please login</h2>
        )}

        {renderArtists()}
      </header>
    </div>
  );
}

export default Spotify;
