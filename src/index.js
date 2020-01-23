import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/wrappers/App';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Add our style
import './assets/style/index.css';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


var BackgroundImage = React.createClass({
  componentWillMount:function(){
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    this.setState({x:x,y:y});
  },
  render:function(){
    return (<div><img className='bg' src={'https://images.pexels.com/photos/373892/pexels-photo-373892.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'} /></div>)
  }
});

ReactDOM.render(
  <BackgroundImage/>,
  document.getElementById('app')
);
