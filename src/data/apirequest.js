import react from "react";
import axios from "axios";
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            username: ''
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        axios.get('https://api.github.com/users/prp1277')
        .then(response => this.setState({username: response.data.name}))
    }

render() {
    return (
        <div className='container'>
        <button className='button' onClick={this.handleClick}>Click me</button>
        <p>{this.state.username}</p>
        </div>
    )
  }
}

export default App