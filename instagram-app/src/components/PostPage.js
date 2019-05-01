import React, { Component } from 'react';
import SearchBarComponent from './SearchBarComponent';
import PostContainer from './PostContainer';
import './App.scss';

const PostPage = props => {
  return (
    <div className="App">
      <header>
          <SearchBarComponent data={props.data} handleChange={props.handleSearchChange} filterPost={props.filterItem} />
       </header>
       <div>
          <PostContainer data={props.data} handleChange={props.handleChange}
          addNewComment={props.addNewComment}
          textInput={props.textInput}
          />
        </div>
    </div>
  );
}


export default PostPage;
