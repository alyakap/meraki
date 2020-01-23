import React from 'react';
import Form from './components/Form'
import GifGrid from './components/GifGrid'
import axios from 'axios';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        SearchStr: "",
        gifs : {
            loading: false,
            error: false,
            data: []
        }
      }
    }

    updateSeacrhStrValue(str){
      this.setState({
          ...this.state,
          SearchStr : str
      })
    }
    getGif(){
      
      this.setState({
          ...this.state,
          gifs : {
              ...this.state.gifs,
              loading: true
          }
      })


      axios.get(`https://api.tenor.com/v1/search?tag=${this.state.SearchStr}&key=LIVDSRZULELA`)
      .then(response=>{
          if(response.data.results){
              this.setState({
                  ...this.state,
                  gifs : {
                      error:false,
                      loading: false,
                      data:[...response.data.results]
                  }
              })
          }else{
              this.setState({
                  ...this.state,
                  gifs: {
                      error:false,
                      loading: false,
                      data:[]
                  }
              })
          }
      })
      .catch(error=>{
          this.setState({
              ...this.state,
              gifs : {
                  ...this.state.gifs,
                  error:true,
                  loading: false,
              }
          })
          throw error;
      })
    }


    render(){
      return ( 
        <div className="App">
              <Form gifSearchStr={this.state.SearchStr} getGif={this.getGif.bind(this)} updateSeacrhStrValue={this.updateSeacrhStrValue.bind(this)} />
              <GifGrid gifs={this.state.gifs} />
        </div>
      );
    }
}
  
