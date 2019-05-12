import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  handleDeletePost(id) {
    this.props.deletePost(id);
  }

  renderPosts() {
    return this.props.posts.reverse().map(post => {
      return (
        <div className="card" key={post._id} style={{ marginBottom: '1rem' }}>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="subtitle has-text-weight-semibold is-6">
                  <strong>Title:</strong> {post.title}
                </p>
              </div>
            </div>

            <div className="content">
              <strong>Content:</strong> {post.body}
              <br />
              post._id: {post._id}
              <div className="is-pulled-right">
                sent on: {new Date(post.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <Link
              to={`/posts/${post._id}/edit`}
              className="card-footer-item has-text-link delete-link"
            >
              <i className="fas fa-edit" />
            </Link>
            <Link
              to="#"
              className="card-footer-item has-text-warning delete-link"
              onClick={() => {
                this.handleDeletePost(post._id);
              }}
            >
              <i className="fas fa-trash" />
            </Link>
          </footer>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts, deletePost }
)(PostList);
