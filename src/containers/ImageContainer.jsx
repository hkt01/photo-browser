import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import SingleImage from '../views/SingleImage';
import Spinner from '../components/Spinner/Spinner';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

/**
 * Container component for loading one image.
 */
class ImageContainer extends Component {
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
        <Breadcrumbs location={this.props.location} />

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

export default ImageContainer;
