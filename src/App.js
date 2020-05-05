import React from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const app = new Clarifai.App({apiKey: 'c009ea2b6bc648a7a310673357055538'});


const ParticlesOptions={
                   particles: {
                        shape: {
                            type: 'images',
                            image: [
                                {src: 'path/to/first/image.svg', height: 20, width: 20},
                                {src: 'path/to/second/image.jpg', height: 20, width: 20},
                            ]
                        }
                    }
  
        }


class App extends React.Component {
    constructor(){
      super();
      //this are the states of App
      this.state={
        input:'',
        imageUrl:'',
        box:{},
        route:'signin',
        isSignedIn:false
      }
    }

    calculateFaceLocation=(data)=>{
      //console.log('calculateFaceLocation:', data);
      const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
      const image=document.getElementById('inputimage'); //DOM manipulation in done in FaceRecognition file
      const width=Number(image.width);
      const height=Number(image.height);
      return {
        leftCol: clarifaiFace.left_col*width,
        topRow:clarifaiFace.top_row*height,
        rightCol: width-(clarifaiFace.right_col *width),
        bottomRow: height-(clarifaiFace.bottom_row *height)
      }

    } 
 
    displayFaceBox =(box)=>{
      this.setState({box:box});
      console.log(box);
    } 

//changing the value and state of input. The input have the URL of the image 
  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }

  onButtonSubmit=()=>{ 
    //changing the state and value of imageUrl
    this.setState({imageUrl:this.state.input});

    //connection the api server . API server response with the necessary result
   app.models.predict(Clarifai.FACE_DETECT_MODEL , this.state.input)
   .then(response=> this.displayFaceBox(this.calculateFaceLocation(response))) //{
     // console.log('onButtonSubmit:',response);
      //first sending the response data to calculateFaceLocation and then forwarding it to displayFaceBox
      //this.displayFaceBox(this.calculateFaceLocation(response));
    
   // }

    .catch(err => console.log(err));
  }

  onRouteChange=(route)=>{
    //console.log('onRouteChange');
    if(route==='signout'){
      this.setState({isSignedIn:false})
    } else if(route==='home'){
      this.setState({isSignedIn:true})
    }
      this.setState({route:route}); //change state to new 'route'
  }

  render(){
   const {isSignedIn, route, imageUrl, box}=this.state; //distructor
      return (
        <div className="App">
           <Particles className="particles"
             params={ParticlesOptions}
           />
          <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
          {route==='home'
            ?<div> {/*home*/}
                <Logo/>
                <Rank/>
                <ImageLinkForm 
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}
                 />
               {/*sending the box and image URL in this component*/}
                <FaceRecognition box={box} imageUrl={imageUrl}/>
             </div>
            : (route==='signin'
              /*Signin-->onRouteChange*/
              ? <Signin onRouteChange={this.onRouteChange}/> 
              : <Register onRouteChange={this.onRouteChange}/>
             )
          }
          
        </div>
      );
 }
}

export default App;
