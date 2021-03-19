import React from 'react';
import {Button, Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import {isMobile} from 'react-device-detect';
// import {URL} from './Constants';

export default class HiroModal extends React.Component {
	constructor(props){
    super(props);
    this.state = {
    	open:!isMobile,
    }
  }

  handleShow(){
  	this.setState({open: true})
  }

  handleClose(){
  	this.setState({open: false})
  }

  render() {

    // const image = URL+"/images/earth.png";
    const image = "https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png";
    
    return (
			<div className="container">
			  
			<Button variant="primary" onClick={this.handleShow.bind(this)}>
        Toggle Target
      </Button>

      <Modal
        show={this.state.open}
        onHide={this.handleClose.bind(this)}
        backdrop="static"
        keyboard={false}
        centered
      >
	        <Modal.Header closeButton>
	          <Modal.Title>Target image</Modal.Title>
	        </Modal.Header>
	        <Modal.Body centered>
	          <div className="container" style={{align:'center', textAlign:'center'}}>
	          	<img src={image} style={{width: '300px', height: '300px'}} alt="target"/>
	          </div>
	        </Modal.Body>
	        <Modal.Footer>
	          <Button variant="danger" onClick={this.handleClose.bind(this)}>
	            Close
	          </Button>
	        </Modal.Footer>
	      </Modal>
			</div>);
  }
}