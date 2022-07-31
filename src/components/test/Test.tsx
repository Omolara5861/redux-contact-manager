import React, { Component } from 'react'

export default class Test extends Component {

  state = {
    title: '',
    body: ''
  }

    //Life Cycle Methods
    //Method runs after the component output has been rendered to the DOM.
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
    }
    //Method runs before the component output has been rendered to the DOM.
    // componentWillUnmount() {
    //     console.log('Component Will Unmount');
    // }

    // componentDidCatch() {
    //     console.log('Component Did Catch');
    // }
  render() {
    const { title, body } = this.state;
    return (

      <div>
        <h1>Test Component</h1>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    )
  }
}
