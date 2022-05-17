
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = { languages: [{ id: 1, code: 'tr', name: 'türkçce' }],
    Words: [{ }] }
  }
  componentDidMount() {
    fetch("http://localhost:36201/api/langs")
      .then((res) => { return res.json() })
      .then((result) => {
        console.log(result)

        this.setState({ languages: result })
      });
      fetch("http://localhost:36201/api/words")
      .then((res) => { return res.json() })
      .then((result) => {
        console.log(result)

        this.setState({ Words: result })
      });
  }
  render() {
    return (
      <div>
        <table className="table table-hover table-primary">
          <thead>
            <tr>
              <th scope="col">İd</th>
              <th scope="col">Code</th>
              <th scope="col">Name</th>

            </tr>
          </thead>

          {
            this.state.languages.map((lng) => {
              return  (<tbody> <tr>

                <td>{lng.id}</td>
                <td>{lng.code}</td>
                <td>{lng.name}</td>

              </tr>
              </tbody>)

            })
          }
        </table>
        <table className="table table-hover table-primary">
          <thead>
            <tr>
              <th scope="col">İd</th>
              <th scope="col">Code</th>
              <th scope="col">Word</th>
              <th scope="col">LngId</th>


            </tr>
          </thead>

          {
            this.state.Words.map((wrd) => {
              return  (<tbody> <tr>

                <td>{wrd.id}</td>
                <td>{wrd.word}</td>
                <td>{wrd.meaning}</td>
                <td>{wrd.lngId}</td>


              </tr>
              </tbody>)

            })
          }
        </table>






      
      </div>
    );
  }
}


export default App;
