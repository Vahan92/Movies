import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { attemptToGetMovies } from '../../store/actions/movies'

function Sidebar(): JSX.Element {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);

  return (
    <div>
      HELLO
    </div>
  );
}

export default Sidebar;
