import React from 'react';

 
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};
    this.posts = this.props.posts;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
      const aux = [];
	let j = 0;
      for (j=0; j<this.props.posts.length; j++) {
          aux.push(this.props.posts[j].title);       
      }
    console.log(aux)
    console.log(this.state)
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();

  }

  render() {
     const planets = this.props.posts;
     const optionItems = planets.map((planet) => <option key={planet.id}>{planet.title}</option>
            );      
    return (
    
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1> {this.state.value} </h1>
          <h1> {this.props.aux} </h1>
          </div>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange} >
            {optionItems}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const posts = [
    { id: 1, title: "HawkEye", author: "Gorbien", aux: ["a", "b", "c"]},
    { id: 2, title: "DoveEye", author: "AGorbien", aux: ["d", "e", "f"]},
    { id: 3, title: "EagleEye", author: "BGorbien", aux: ["g", "h", "i"]}
                ];  

export const Prueba = props => (
<div>
	<FlavorForm posts={posts} aux="Posts"/>
</div>
)


