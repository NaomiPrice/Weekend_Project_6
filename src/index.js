import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
// Import axios
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
 yield takeEvery('GET_MOVIES', getMovieData);
 yield takeEvery('GET_ONE_MOVIE', getOneMovie);
 yield takeEvery('GET_GENRES', getGenres);
}

function* getMovieData(){
    try{
        const response = yield axios.get('/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data});
    } catch(error){
        console.log('error while getting movies', error);
    }
}

function* getOneMovie(action){
    try{
        const response = yield axios.get(`/movies/details/${action.payload}`);
        yield put({type: 'SET_ONE_MOVIE', payload: response.data});
    } catch(error){
        console.log('error getting this one movie details', error);
    }
}

function* getGenres(action){
    try{
        const response = yield axios.get(`/movies/genres/${action.payload}`);
        yield put({type: 'SET_GENRES', payload: response.data});
    } catch (error){
        console.log('error getting generes for this movie', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const oneMovie = (state=[], action)=>{
    if (action.type === 'SET_ONE_MOVIE'){
        return action.payload;
    }
    return state;
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        oneMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
