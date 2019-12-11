import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Images from '../views/Images';
import Spinner from '../components/Spinner/Spinner';

/*
 * Container component for loading images per page.
 * TODO: Calculate pageLimit based on screen width
 */
class ImagesContainer extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      totalCount: 0,
      currentPage: 1,
      pageLimit: 24,
      loading: false,
      error:null
    }
  }

  componentDidMount() {
    this.setState({loading:true}, function() {
      this.fetchImages();
    });

  }

  fetchImages = () => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${this.state.currentPage}&_limit=${this.state.pageLimit}`)
      .then(res => {
        const images = res.data;
        const totalCount = res.headers['x-total-count'];
        this.setState({ images, totalCount, loading: false });
      })
      .catch(error => {
          console.log(error.response)
          this.setState({ loading: false, error: error.response.statusText });
      });
  }

  render() {
    return (
      <Container fluid={false}>
        <Breadcrumb>
          <Breadcrumb.Item active>Images</Breadcrumb.Item>
        </Breadcrumb>
        { this.state.loading ?
          (<Spinner />) :
          (!this.state.error ?
            (<Images images={this.state.images} />) :
            (<Alert variant="danger">{this.state.error}</Alert>)
          )
        }
      </Container>
    );
  }
}

export default ImagesContainer;
