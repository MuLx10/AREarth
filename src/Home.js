import React from 'react';

import HiroModal from './HiroModal';
import {PostsData} from './Constants'


export default class Home extends React.Component { 
  constructor() {
    super();
    this.state = {
      posts: {},
    }
  }
  componentWillMount() {
    this.setState({
      posts: PostsData
    });
  }
 

  render() {

    return <div className="container">
      <header className="app-header"></header>
        <Title/>
        <div className="app-card-list" id="app-card-list">
          <div className="container">
            {
              Object
              .keys(this.state.posts)
              .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
            }
          </div>
        </div>
    </div>
  }
}


class Title extends React.Component {
  render() {
    return <section className="app-title">
      <div className="app-title-content">
        <h1>Hack Reality</h1>
        <p>AR app for exploring the Earth</p>
        <HiroModal />
      </div>
    </section>
  }
}


class Button extends React.Component {
  render() {
  const { url } = this.props;
    return (
      <button className="button button-primary" >
        <i className="fa fa-chevron-right"></i> <a href={url}>Find out more</a>
      </button>
    )
  }
}


class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
      </header>
    )
  }
}


class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">        
        <h2>{this.props.details.title}</h2>
        <p className="body-content">{this.props.details.text}</p>
        <Button url={this.props.details.url}/>
      </div>
    )
  }
}


class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader image={this.props.details.image}/>
        <CardBody details={this.props.details}/>
      </article>
    )
  }
}


