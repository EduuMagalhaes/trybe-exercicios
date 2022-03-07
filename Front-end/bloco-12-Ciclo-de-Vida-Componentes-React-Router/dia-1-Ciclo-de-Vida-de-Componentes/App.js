import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImage: '',
      loading: true,
    };    
  }

  fetchDog = () => {
    this.setState(
      { loading: true },
      async () => {
        const requestUrlDogImage = await fetch('https://dog.ceo/api/breeds/image/random');
        const UrlDogImage = await requestUrlDogImage.json();        
        this.setState({
          dogImage: UrlDogImage.message,
          loading: false,
        })
      }
    )
  }

  componentDidMount() {    
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {    
    if (nextState.dogImage.includes('terrier')){      
      return false;
    }
    return true;
  }  

  componentDidUpdate() {
    if (!this.state.loading){
      localStorage.setItem("dogURL", this.state.dogImage);
      const dogBreed = this.state.dogImage.split("/")[4];
      alert(dogBreed);
    }
  }

  render(){
    const {loading, dogImage} = this.state;
    return (
      <div>
        <h1>Exercicio 12.1</h1>
        { loading ? <span>Loading...</span> : <img src={ dogImage } alt="Foto do Dog!" /> }
        <button onClick={ this.fetchDog }>Busque mais um doguinho!</button>
      </div>
    );
  }
}

export default App;
