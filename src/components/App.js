import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {videos:[], selectedVideo: null};

    componentDidMount(){
        this.onTermSubmit('manchester united');
    }
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    };

    render(){
        let num = "ui one column grid";
        if(this.state.selectedVideo){
            num = "ui two column grid"
        }
        return(
            <div className="ui container"> 
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className={num}>
                    <div className="column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;