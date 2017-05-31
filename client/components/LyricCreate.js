import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import addLyricToSong from '../mutations/addLyricToSong';
import fetchSong from '../queries/fetchSong';

class LyricCreate extends Component {
  constructor(props){
    super(props);

    this.state = { content: '' };
  }

  onSubmit(event){
    event.preventDefault();
    this.props.mutate({
      variables: { content: this.state.content, songId: this.props.songId }
    });
    this.setState( { content: '' } );
  }

  render(){
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a lyric</label>
        <input
          onChange={ event => this.setState({ content: event.target.value })}
          value={this.state.content}
        />
      </form>
    );
  }
}

export default graphql(addLyricToSong)(LyricCreate);
