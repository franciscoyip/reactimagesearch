import { SET_TERM, FETCH_ITEM } from './types';

import fetchJsonp from 'fetch-jsonp';
import axios from 'axios';

const account_id = '883610';
const URL = "http://api.bigstockphoto.com/2/" + account_id + "/search/";

export function setTerm(term){
  return {
    type: SET_TERM,
    payload: term
  }
}

//Fetch data from url
export function fetchData(){

  return function(dispatch, getState){
    const term = getState().term;
    let url = URL + '?q='+term;

    fetchJsonp(url)
      .then(function(response) {
        //console.log(response);
      return response.json()
    }).then(function(json) {
      //console.log('parsed json', json)
      const payload = json.data.images;
      dispatch({
        type: FETCH_ITEM,
        payload
      });

    }).catch(function(ex) {
      console.log('parsing failed', ex)
    });

  }
}
