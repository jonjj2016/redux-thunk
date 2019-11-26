import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import AuthorInfo from './Author.component';
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  result = () => {
    return this.props.posts.map(post => (
      <div className='item' key={post.id}>
        <i className='large middle aligned icon user' />
        <div className='content'>
          <div className='description'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>
              <AuthorInfo id={post.userId} />
            </p>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return <div className='ui relaxed divided list'>{this.result()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
const mapDispatchToProps = dispatch => ({
  fetchPostsAndUsers: () => dispatch(fetchPostsAndUsers())
});
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
