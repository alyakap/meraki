import React from 'react';
import Form from './components/Form'
import GifGrid from './components/GifGrid'
import axios from 'axios';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        pageLoad:true,
        SearchStr: "",
        gifs : {
            disabled:false,
            loading: false,
            error: false,
            data: []
        },
        chosenGif : ''
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
              loading: true,
              disabled: true
          }
      })


      axios.get(`https://api.tenor.com/v1/search?tag=${this.state.SearchStr}&key=LIVDSRZULELA`)
      .then(response=>{
          if(response.data.results){
              this.setState({
                  ...this.state,
                  pageLoad:false,
                  gifs : {
                      error:false,
                      loading: false,
                      data:[...response.data.results],
                      disabled:false
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
        <div className="container">
              <Form disabled={this.state.gifs.disabled} gifSearchStr={this.state.SearchStr} getGif={this.getGif.bind(this)} updateSeacrhStrValue={this.updateSeacrhStrValue.bind(this)} />
              <GifGrid gifs={this.state.gifs} pageLoad={this.state.pageLoad}  />
              
            
        </div>
      );
    }
}
  
