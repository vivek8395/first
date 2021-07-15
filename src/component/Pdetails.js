import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Constant from '../utility/Constant';
import {Card,Button} from 'react-bootstrap'
import './pdetails.css'
import Header from './Header';
class Pdetails extends Component {

    
    goToBack(){
        this.props.history.push("/")
    }
    render() {

        console.log(this.props.location.state)
        const data = this.props?.location?.state?.data;
        return (
            <div>
                <Header/>
                <div class="container">
  <div class="row">
    <div class="col-sm">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Constant.IMG_URL+data.profile_pic} />
  <Card.Body>
    <Card.Title>{data.professional.first_name} {data.professional.last_name}</Card.Title>
    <Card.Text>
      <span><b>Title:-</b></span>{data.title}
    </Card.Text>
    <div className='btn'>
   <button>whatsapp</button>
   <button>FB</button>
   <button>Insta</button>
   </div>
  </Card.Body>
</Card>
    </div>
    <div class="col-sm">
    <Card style={{ width: '18rem', height:'100%' }}>
   <Card.Body>
    
    <Card.Text>
        <div className='details'>
    <p>ID:{data.id}</p>
    <p>UserId: {data.user_id}</p>
    <p>Email ID: {data.professional.email}</p>
    <p>Phone No.: {data.professional.phone}</p>
    <p>Address: {data.address}</p>
    </div>
    </Card.Text>
  </Card.Body>
</Card>
    </div>
   
  </div>
  
</div>
<Button variant="secondary" size="lg" onClick={()=>this.goToBack()}>
   Go To Back
  </Button>
            </div>
        )
    }
}

export default withRouter(Pdetails);