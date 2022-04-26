import "./Video.css";
import { useState, useRef } from "react";
import movie1 from "../source/mc1.jpg";
import movie2 from "../source/mc2.jpg";
import movie3 from "../source/mc3.jpg";

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState();


  const inputRef = useRef() // create a ref object
  // function to handle the search
  const searchVideos = async () => {
    const load = document.querySelector(".load");
    setIsLoading(true); // set the state to loading
    console.log(isLoading);
    let inputTable = inputRef.current.value;
    console.log(inputTable)
    if(isLoading === true){ // if the state is loading
        load.classList.add('animate');
        setTimeout(() => {
            renderVideos();
            load.classList.remove('animate');
        }, 9500);

    }
};

  // render the videos to the DOM
  const renderVideos = () => {
    const block_items = document.querySelectorAll(".block_items");
    let inputTable = inputRef.current.value;
    // let videos = import("../videos.json");
    

    let pythonWordCheck = new RegExp("python");
    let javascriptWordCheck = new RegExp("javascript|js|Javascript");
    let programmingWordCheck = new RegExp("programming");
    let webDevWordCheck = new RegExp("Web|Web Development|WebDev|Wesite Development|web development|web");
    let reactWordCheck = new RegExp("React|react|Reactjs|reactjs");


    if(pythonWordCheck.test(inputTable)){ // if the search term is python
        console.log('\nvalue:' + inputTable)

        var myHeaders = new Headers();
        myHeaders.append("Cookie", "sails.sid=s%3A3zfMuYGZu1EFiTKBlWmSyGT5LkkUm7Se.Q%2FP8a8LO7OzGb%2BLGM2MmQaw1KbY5lNg1V8qc2bcfHUM");
      
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
      
        fetch(process.env.REACT_APP_URL, requestOptions) // fetch the videos from the API
        .then(response => response.json()) // parse the response to JSON
        .then(result => { // render the videos to the DOM
          console.log(result.args[0]) // log the result to the console

          for (let i = 0; i < block_items.length; i++) { // loop through the videos
            const element = block_items[i];
            element.innerHTML = `<div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_Python[0].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_Python[0].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_Python[0].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_Python[0].url} target='_blank'>Watch Now</a>
        </div>

        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_Python[1].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_Python[1].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_Python[1].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_Python[1].url} target='_blank'>Watch Now</a>
        </div>

        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_Python[2].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_Python[2].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_Python[2].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_Python[2].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_Python[3].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_Python[3].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_Python[3].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_Python[3].url} target='_blank'>Watch Now</a>
        </div>

        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_Python[4].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_Python[4].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_Python[4].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_Python[4].url} target='_blank'>Watch Now</a>
        </div>

        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_Python[5].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_Python[5].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_Python[5].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_Python[5].url} target='_blank'>Watch Now</a>
        </div>`
        }
        })
        .catch(error => console.log('error', error)); // catch any errors
    }
    if(javascriptWordCheck.test(inputTable)){ // if the search term is javascript
        console.log('\nvalue:' + inputTable)
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "sails.sid=s%3A3zfMuYGZu1EFiTKBlWmSyGT5LkkUm7Se.Q%2FP8a8LO7OzGb%2BLGM2MmQaw1KbY5lNg1V8qc2bcfHUM");
      
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
      
        fetch(process.env.REACT_APP_URL, requestOptions) // fetch the videos from the API
        .then(response => response.json()) // parse the response to JSON
        .then(result => { // render the videos to the DOM
          console.log(result.args[0]) // log the result to the console

          for (let i = 0; i < block_items.length; i++) { // loop through the videos
            const element = block_items[i];
            element.innerHTML = `<div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_JavaScript[0].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_JavaScript[0].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_JavaScript[0].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_JavaScript[0].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_JavaScript[1].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_JavaScript[1].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_JavaScript[1].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_JavaScript[1].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_JavaScript[2].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_JavaScript[2].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_JavaScript[2].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_JavaScript[2].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_JavaScript[3].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_JavaScript[3].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_JavaScript[3].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_JavaScript[3].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_JavaScript[4].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_JavaScript[4].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_JavaScript[4].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_JavaScript[4].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_JavaScript[5].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_JavaScript[5].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_JavaScript[5].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_JavaScript[5].url} target='_blank'>Watch Now</a>
        </div>`
        }
        })
        .catch(error => console.log('error', error)); // catch any errors
    }
    if(programmingWordCheck.test(inputTable)){
        // block_items.style.display = 'block';
        console.log('\nvalue:' + inputTable)
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "sails.sid=s%3A3zfMuYGZu1EFiTKBlWmSyGT5LkkUm7Se.Q%2FP8a8LO7OzGb%2BLGM2MmQaw1KbY5lNg1V8qc2bcfHUM");
      
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
      
        fetch(process.env.REACT_APP_URL, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result.args[0])

          for (let i = 0; i < block_items.length; i++) {
            const element = block_items[i];
            element.innerHTML = `<div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Programming[0].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Programming[0].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Programming[0].description}</p>
            <a id='link' href=${result.args[0].videos.Programming[0].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Programming[1].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Programming[1].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Programming[1].description}</p>
            <a id='link' href=${result.args[0].videos.Programming[1].url} target='_blank'>Watch Now</a>
        </div>`
        }
        })
        .catch(error => console.log('error', error));
    }
    if(webDevWordCheck.test(inputTable)){
        // block_items.style.display = 'block';
        console.log('\nvalue:' + inputTable)
        
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "sails.sid=s%3A3zfMuYGZu1EFiTKBlWmSyGT5LkkUm7Se.Q%2FP8a8LO7OzGb%2BLGM2MmQaw1KbY5lNg1V8qc2bcfHUM");
      
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
      
        fetch(process.env.REACT_APP_URL, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result.args[0])

          for (let i = 0; i < block_items.length; i++) {
            const element = block_items[i];
            element.innerHTML = `<div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_Web_Development[0].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_Web_Development[0].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_Web_Development[0].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_Web_Development[0].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_Web_Development[1].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_Web_Development[1].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_Web_Development[1].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_Web_Development[1].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_Web_Development[2].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_Web_Development[2].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_Web_Development[2].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_Web_Development[2].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_Web_Development[3].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_Web_Development[3].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_Web_Development[3].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_Web_Development[3].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_Web_Development[4].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_Web_Development[4].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_Web_Development[4].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_Web_Development[4].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_Web_Development[5].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_Web_Development[5].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_Web_Development[5].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_Web_Development[5].url} target='_blank'>Watch Now</a>
        </div>`
        }
        })
        .catch(error => console.log('error', error));
    }
    if(reactWordCheck.test(inputTable)){
        // block_items.style.display = 'block';
        console.log('\nvalue:' + inputTable)
        
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "sails.sid=s%3A3zfMuYGZu1EFiTKBlWmSyGT5LkkUm7Se.Q%2FP8a8LO7OzGb%2BLGM2MmQaw1KbY5lNg1V8qc2bcfHUM");
      
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
      
        fetch(process.env.REACT_APP_URL, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result.args[0])

          for (let i = 0; i < block_items.length; i++) {
            const element = block_items[i];
            element.innerHTML = `<div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_React[0].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_React[0].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_React[0].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_React[0].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_React[1].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_React[1].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_React[1].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_React[1].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_React[2].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_React[2].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_React[2].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_React[2].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_React[3].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_React[3].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_React[3].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_React[3].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_React[4].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_React[4].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_React[4].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_React[4].url} target='_blank'>Watch Now</a>
        </div>
        <div id='video-id2' class="video" key=${''}>
            <img id='img' src=${result.args[0].videos.Learn_React[5].thumbnail} alt=${''} />
            <h3 id='video-title2'>${result.args[0].videos.Learn_React[5].title}</h3>
            <p id='video-description2'>${result.args[0].videos.Learn_React[5].description}</p>
            <a id='link' href=${result.args[0].videos.Learn_React[5].url} target='_blank'>Watch Now</a>
        </div>`
        }
        })
        .catch(error => console.log('error', error));
    }
  };
  return (
    <div className="videos_container">
      <div className="content">
        <div className="header">
          <h1>ResFeed</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm} ref={inputRef}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={searchVideos}>Search</button>
          </div>
        </div>
        <div className="videoBox">
            <div className="header1">
              <h1>Trending</h1>
            </div>
          <div className="video_content">
            <div className="video_items">
              <div className="video" id="video-id">
                <img src={movie1} alt="" id="video.thumbnail" />
                <h3 id="video-title">Test</h3>
                <p id="video-description">TestDaa</p>
              </div>
            </div>
            <div className="video_items">
              <div className="video" id="video-id">
                <img src={movie2} alt="" id="video.thumbnail" />
                <h3 id="video-title">Test</h3>
                <p id="video-description">TestDaa</p>
              </div>
            </div>
            <div className="video_items">
              <div className="video" id="video-id">
                <img src={movie3} alt="" id="video.thumbnail" />
                <h3 id="video-title">Test</h3>
                <p id="video-description">TestDaa</p>
              </div>
            </div>
            <div className="video_items">
              <div className="video" id="video-id">
                <img src={movie1} alt="" id="video.thumbnail" />
                <h3 id="video-title">Test</h3>
                <p id="video-description">TestDaa</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="video_block">
          <div className="header2">
            <h1>From Query Search</h1>
          </div>
          <div className="block_items">
            <div className="videos">
              <div className="video" id="video.id">
                <img src={movie1} alt="" id="video.thumbnail" />
                <h3 id="video.title">Test</h3>
                <p id="video.description">TestDaa</p>
              </div>
            </div>
            <div className="videos">
              <div className="video" id="video.id">
                <img src={movie1} alt="" id="video.thumbnail" />
                <h3 id="video.title">Test</h3>
                <p id="video.description">TestDaa</p>
              </div>
            </div>
            <div className="videos">
              <div className="video" id="video.id">
                <img src={movie1} alt="" id="video.thumbnail" />
                <h3 id="video.title">Test</h3>
                <p id="video.description">TestDaa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="load"></div>
    </div>
  );
};
export default Videos;
