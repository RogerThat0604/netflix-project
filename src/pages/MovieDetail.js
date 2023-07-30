import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';

const MovieDetail = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state)=>state.movie);
  console.log("selectedMovieInfo",selectedMovie);
  useEffect(()=>{
    dispatch(movieAction.getMovieDetail(id));
  },[]);

  return (
    
    <div>
      <Container className='movie-detail-container'>
        <Row>
          <Col className='movie-poster-img' 
          style={{
            backgroundImage:
              "url(" +
              `https://www.themoviedb.org/t/p/w300_and_h450_bestv2)${selectedMovie.poster_path}` +
              ")",
          }}
          >
             
          </Col>
          <Col>
          
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieDetail
