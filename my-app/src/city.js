/*import React from 'react'
import ReactDOM from 'react-dom';
const axios = require('axios')

class Users extends React.Component {
 
 componentDidMount(){
  axios.get('http://localhost:5000/api/city', {
    responseType: 'json'
  })
  .then(function(res) {
      if(res.status==200) {
        console.log(res.data);

        function MostrarCiudades(res) {
          const cities = res.data;
          const listItems = cities.map((city) =>
            <li key={city.toString()}>
              {city}
            </li>
          );
          return (
            <ul>{listItems}</ul>
          );
        }
        
        ReactDOM.render(
          <MostrarCiudades res={res} />,
          document.getElementById('root')
        );
      
      }
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    });
  }
  

  render() {
    return <h1>City</h1>
  }
}
export default Users
*/

import React from 'react';

const CITYHOST = 'http://localhost:5000/api/city'

class City2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      cities: []
    };
  }

  render() {
    const listItems = this.state.cities.map((city) => <li key={city._id}>{city.city}</li>);

      return (
      <div>
        <p>{this.state.isFetching ? 'Fetching cities...' : ''}</p>
        <ul>
          {listItems}
        </ul>
        </div>
    );
  }

  async componentDidMount() {
    this.fetchCities()
  }

  fetchCities() {

    this.setState({
      isFetching: true,
      cities: []
    });

    fetch(CITYHOST)
      .then(response => response.json())
      .then(result => this.setState({
        isFetching: false,
        cities: result.cities
      }))
      .catch(e => console.log(e));
  }
}

export default City2