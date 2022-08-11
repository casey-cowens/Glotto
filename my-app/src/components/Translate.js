import React, {Component} from 'react';
import axios from 'axios'



class Translate extends Component{

const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("text", "The POST method has several advantages over GET: it is more secure because most of the request is hidden from the user; Suitable for big data operations.");
encodedParams.append("tl", "es");
encodedParams.append("sl", "en");

const options = {
  method: 'POST',
  url: 'https://google-translate20.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '712bf9e2e1msh66e6efc09c3da2cp176473jsnf55e3b889176',
    'X-RapidAPI-Host': 'google-translate20.p.rapidapi.com'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    render(){

        return(

            )
    }
}

export default Translate