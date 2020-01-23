import React from 'react'
import axios from 'axios';
import Form from './Form'
import MovieList from './MovieList'

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formValue: "",
            movies : {
                loading: false,
                error: false,
                data: []
            }
        }
    }
    updateFormValue(str){
        this.setState({
            ...this.state,
            formValue : str
        })
    }
    getMovie(){
        this.setState({
            ...this.state,
            movies : {
                ...this.state.movies,
                loading: true
            }
        })
        axios.get(`http://www.omdbapi.com?s=${this.state.formValue}&apikey=2e3b4604`)
        .then(response=>{
            if(response.data.Search){
                this.setState({
                    ...this.state,
                    movies : {
                        error:false,
                        loading: false,
                        data:[...response.data.Search]
                    }
                })
            }else{
                this.setState({
                    ...this.state,
                    movies : {
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
                movies : {
                    ...this.state.movies,
                    error:true,
                    loading: false,
                }
            })
            throw error;
        })
    }
    render(){
        return  <main className="main">
                    <Form movieSearchStr={this.state.formValue} getMovie={this.getMovie.bind(this)} updateFormValue={this.updateFormValue.bind(this)} />
                    <MovieList movies={this.state.movies} />
                </main>
    }
}