import React, {Component} from 'react';
import * as Survey from 'survey-react';
Survey.StylesManager.applyTheme("modern");


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: []
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8081/data/items/data/1?fields=form_data")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data.form_data
          });
          console.log(result.data.form_data)
        },
      
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  
   onComplete(survey, options) {
var surveyResponse = {
  "response_json":[
   survey.data
  ]
}

  var request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(surveyResponse)
  };

  fetch("http://127.0.0.1:8081/response/items/response", request)
  .then(async response => {
  const isJson = response.headers.get('content-type')?.includes('application/json');
  const result = isJson && await response.json();

  // check for error response
  if (!response.ok) {
      // get error message from body or default to response status
      const error = (response && response.message) || response.status;
      return Promise.reject(error);
  }

    })
  .catch(error => {
    // this.setState({ errorMessage: error.toString() });
    console.error('There was an error!', error);
});
   
    console.log("Survey results: " + JSON.stringify(survey.data));
   };
   render() {
    const { error, items } = this.state;
    var model = new Survey.Model(items);
    return (<Survey.Survey model={model} onComplete={this.onComplete}/>);

   }
}

export default App;
