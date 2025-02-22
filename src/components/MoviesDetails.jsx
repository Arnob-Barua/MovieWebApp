import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';

const MoviesDetails = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(asyncloadmovie(id))
  return()=>{
    dispatch(removemovie())
  }
  },[])
  return (
    <div className='' >
      
    </div>
  )
}

export default MoviesDetails