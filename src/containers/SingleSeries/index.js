import React, {Component} from 'react';
import Loader from '../../components/Loader';

class SingleSeries extends Component {
    state = {
       show: null
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        
        fetch(`http://api.tvmaze.com/shows/${id}?embed-episodes`).then(response => response.json())
    .then(json => this.setState({ show: json}));
     
    }
    render(){
        const { show } = this.state;
        console.log(show);
        return(
            <div>
                
                { 
                    show!== null && 
                   <div>
                      <p>{show.name}</p>
                      <p> Rating - {show.rating.average}
                      </p>
                      <p> Premiered - {show.premiered}
                      </p>
                      
                      <p><img alt ='show' src={show.image.medium} />
                      </p>
                   </div>
                } 
                { 
                    show === null && <Loader />
                }
             </div>
        )
    }
}

export default SingleSeries;