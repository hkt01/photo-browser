import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Images from '../views/Images';
import Spinner from '../components/Spinner/Spinner';

/*
 * Container component for loading images per page.
 * TODO: Calculate pageLimit based on screen width
 */
class ImagesContainer extends Component {
  constructor() {
    super()
    this.state = { images: [], totalCount: 0, currentPage: 1, pageLimit: 24, loading: false }
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
  }

  render() {
    return (
      <Container fluid={false}>
        <Row>
          <h1>Images</h1>
        </Row>
        { this.state.loading ?
          (<Spinner />) :
          (<Images images={this.state.images} />)
        }
      </Container>
    );
  }
}

export default ImagesContainer;
