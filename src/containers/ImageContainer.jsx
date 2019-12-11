import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import SingleImage from '../views/SingleImage';
import Spinner from '../components/Spinner/Spinner';

/*
 * Container component for loading one image.
 */
class ImagesContainer extends Component {
  constructor() {
    super()
    this.state = {
      image: {},
      loading: false,
      error: null
    }
  }

  componentDidMount() {
    // Check if we already have image info coming through props
    const image = (this.props.location.state)?this.props.location.state.image:null;
    if(image) {
      this.setState({image});
    } else { // Get image id from url params
      const { id } = this.props.match.params;
      this.setState({loading:true}, function() {
        this.fetchImage(id);
      });
    }
  }

  fetchImage = (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(res => {
        const image = res.data;
        this.setState({ image, loading: false });
      })
      .catch(error => {
          console.log(error.response)
          this.setState({ loading: false, error: error.response.statusText });
      });
  }

  render() {
    return (
      <Container >
        <Breadcrumb>
          <Breadcrumb.Item href="/">Images</Breadcrumb.Item>
          <Breadcrumb.Item active>Single image</Breadcrumb.Item>
        </Breadcrumb>

        { this.state.loading  ?
          (<Spinner />) :
          ( !this.state.error ?
            (<SingleImage image={this.state.image} />) :
            (<Alert variant="danger">{this.state.error}</Alert>)
          )
        }
      </Container>
    );
  }
}

export default ImagesContainer;
