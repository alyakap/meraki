import React from 'react'
import axios from 'axios';


export default class ChosenGif extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            data:[]
        }
    }
    componentDidMount(){ 
        this.setState({
            ...this.state,
            loading: true
        })
    
        axios.get(`https://api.tenor.com/v1/gifs?ids=${this.props.id}&key=LIVDSRZULELA`)
      .then(response=>{
          if(response.data.results){
              this.setState({
                  ...this.state,
                error:false,
                loading: false,
                data:[...response.data.results]  
              })
          }else{
              this.setState({
                ...this.state,
                error:false,
                loading: false,
                data:[]  
              })
          }
        })
        .catch(error=>{
            this.setState({
                ...this.state,
                error:true,
                loading: false,

            })
            throw error;
        })
    }

    closeImgPreview(){
        this.setState({
            ...this.state,
            data:[]

        })
        this.props.clearChosenGif();
        
    }
    render(){
        if(this.state.data[0]){
            return (
                <div>
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-btn" onClick={this.closeImgPreview.bind(this)}>&times;</span>
                            <img className="chosen-img" src={this.state.data[0].media[0].mediumgif.url} alt="" />
                        </div>
                    </div>
               </div>
            )
        } else return null;
      }

}

