import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: []
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term //q es algo seteado por la api de yt. Es lo que busco con la barra de busqueda
      }
    });
    this.setState({
      videos: response.data.items
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
