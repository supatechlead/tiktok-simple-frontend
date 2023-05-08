import Video from './pages/Video';
import './App.css';

function App() {
  let maxHeight;

  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight;
  }



  const videos = [
  {
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="app__videos">
        { videos.map(video => {
            return (
              <Video 
                likes={ video.likes }
                messages={ video.messages }
                shares={ video.shares }
                userName={ video.userName }
                description={ video.description }
                music={ video.music }
                videoUrl={ video.videoUrl }
              />
            );
          }) 
        }
      </div>
    </div>
  );
}

export default App;
