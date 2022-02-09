/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainWrapper, StyledUl } from "./styled";
import { attemptToGetMovies } from "../../store/actions/movies";
import Movie from "../Movie";

function Sidebar(): JSX.Element {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: any) => state);
  const [list, setList] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    dispatch(attemptToGetMovies());
  }, []);

  useEffect(() => {
    setList(movies.response);
  }, [movies?.status]);

  const showDetails = (details: any) => {
    setShowModal(true);
    setMovieDetails(details);
  };

  return (
    <MainWrapper>
      <h1>Movies</h1>
      <input
        type="text"
        name="search"
        placeholder="Type to search"
        onChange={(e) =>
          setFilterText(
            e.target.value.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
          )
        }
      />
      <StyledUl>
        {list
          ?.filter((value: any) => value["im:name"].label.includes(filterText))
          .map((info: any) => {
            return (
              <li onClick={() => showDetails(info)} key={info["im:name"].label}>
                <img src={info["im:image"][0].label} alt="logo" />
                <span>{info["im:name"].label}</span>
              </li>
            );
          })}
      </StyledUl>
      {showModal && (
        <Movie movieDetails={movieDetails} setShowModal={setShowModal} />
      )}
    </MainWrapper>
  );
}

export default Sidebar;
