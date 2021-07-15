import React, { Component } from 'react'
import Constant from '../utility/Constant';
import {Card} from 'react-bootstrap'
import './main.css';
import { withRouter } from "react-router-dom";

 class Main extends Component  {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    moreDetails( item ){
        console.log(item)
        this.props.history.push("/pdetails", { data : item})
         }

    componentDidMount() {
      fetch("https://dev.perfectprof.com/api/search")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.data
                          });
                          console.log('data is',result.data)
          },
                  (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

   
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
           
<Card style={{ width: '22rem' }} className='card'>
  <Card.Img className='cardImg' variant="top" src={Constant.IMG_URL+item.profile_pic} >
      
  </Card.Img>
  <Card.Body>
    <Card.Title>{item.professional.first_name}  {item.professional.last_name}</Card.Title>
    <Card.Link onClick={() => this.moreDetails(item)}><span> Click Here to more Details </span> </Card.Link>
  </Card.Body>
  </Card> 


            ))}
          </ul>
        );
      }
    }
  }

  export default withRouter(Main);