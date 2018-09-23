import React, { Component } from "react";
import SearchBar from "./search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./video_list";
import VideoDetail from "./video_detail";
import _ from "lodash";

const API_KEY = "AIzaSyDRHRhDFSN8vuJ1RqTt1bP9vbmtxx14KhY";

export default class App extends Component {
  componentWillMount = () => {
    this.videoSearch("surfboards");
  };
  state = {
    videos: [],
    selectedVideo: null
  };

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      console.log(videos);
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        {/* term => this.videoSearch(term) */}
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => {
            this.setState({ selectedVideo });
          }}
        />
      </div>
    );
  }
}
