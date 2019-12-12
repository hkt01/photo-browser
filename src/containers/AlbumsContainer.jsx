import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import Pagination from '../components/Pagination/Pagination';
import Albums from '../views/Albums';
import Spinner from '../components/Spinner/Spinner';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

/**
 * Container component for loading albums per page.
 */
class AlbumsContainer extends Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      totalCount: 0,
      currentPage: 1,
      pageLimit: 21,
      pageNeighbours: 2,
      loading: false,
      error:null
    }
  }

  componentDidMount() {
    this.setState({loading:true}, function() {
      this.fetchAlbums();
    });

  }

  fetchAlbums = () => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?_page=${this.state.currentPage}&_limit=${this.state.pageLimit}`)
      .then(res => {
        const albums = res.data;
        const totalCount = parseInt(res.headers['x-total-count']);
        this.setState({ albums, totalCount, loading: false });
      })
      .catch(error => {
          console.log(error.response)
          this.setState({ loading: false, error: error.response.statusText });
      });
  }

  setPagination = (page) => {
    this.setState({ currentPage: page, loading:true }, this.fetchAlbums);
  }

  render() {
    return (
      <Container fluid={false}>
        <Breadcrumbs location={this.props.location} />

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
            (<Albums albums={this.state.albums} />) :
            (<Alert variant="danger">{this.state.error}</Alert>)
          )
        }
      </Container>
    );
  }
}

export default AlbumsContainer;
