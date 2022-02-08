import React from 'react';
import { Wrapper, Content, Small } from './styled';

interface IMovie {
  movieDetails: any;
  setShowModal: (isOtherUserBlock: boolean) => void;
}

function Movie({setShowModal, movieDetails}:IMovie) {  
  return <Wrapper onClick={() => setShowModal(false)}>
    <Content onClick={(e) => e.stopPropagation()}>
      <img src={movieDetails['im:image'][2].label} alt="logo" />
      <h3>{movieDetails['im:name'].label}</h3>
      <h5>Release date {movieDetails['im:releaseDate'].attributes.label}</h5>
      <h5>Director {movieDetails['im:artist'].label}</h5>
      <p>{movieDetails.summary.label}</p>
      <Small>{movieDetails.rights.label}</Small>
    </Content>
  </Wrapper>;
}

export default Movie;
