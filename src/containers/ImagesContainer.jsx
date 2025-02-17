import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import Pagination from '../components/Pagination/Pagination';
import Images from '../views/Images';
import Spinner from '../components/Spinner/Spinner';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

/**
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
      pageNeighbours: 2,
      loading: false,
      error:null,
      apiUrl: 'https://jsonplaceholder.typicode.com/photos'
    }
  }

  componentDidMount() {
    // Check if we have album info in props or id in URL parameters
    const album = (this.props.location.state)?this.props.location.state.album:null;
    const { id } = this.props.match.params;
    let apiUrl = this.state.apiUrl;

    if(album || id) { // !Bug in the API, returns all images, not just album images!
      apiUrl = 'https://jsonplaceholder.typicode.com/albums/'+((album)?album.id:id)+'/photos';
    }
    this.setState({loading:true, apiUrl}, function() {
      this.fetchImages();
    });
  }

  fetchImages = () => {
    axios.get(`${this.state.apiUrl}?_page=${this.state.currentPage}&_limit=${this.state.pageLimit}`)
      .then(res => {
        const images = res.data;
        const totalCount = parseInt(res.headers['x-total-count']);
        this.setState({ images, totalCount, loading: false });
      })
      .catch(error => {
          console.log(error.response)
          this.setState({ loading: false, error: error.response.statusText });
      });
  }

  setPagination = (page) => {
    this.setState({ currentPage: page, loading:true }, this.fetchImages);
  }

  render() {
    return (
      <Container fluid={false}>
        <Breadcrumbs location={this.props.location}/>

        { this.state.totalCount ?
          (<Pagination
            totalRecords={this.state.totalCount}
            pageLimit={this.state.pageLimit}
            pageNeighbours={this.state.pageNeighbours}
            onPageChanged={this.setPagination}
          />):(null)
        }

        { this.state.loading ?
          (<Spinner />) :
          (!this.state.error ?
            (<Images {...this.props} images={this.state.images} />) :
            (<Alert variant="danger">{this.state.error}</Alert>)
          )
        }
      </Container>
    );
  }
}

export default ImagesContainer;
