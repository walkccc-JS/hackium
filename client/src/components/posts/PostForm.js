// PostForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PostField from './PostField';
import formFields from './formFields';

class PostForm extends Component {
  renderFields() {
    return formFields.map(({ label, name, icon, placeholder }) => {
      return (
        <Field
          component={PostField}
          type="text"
          label={label}
          name={name}
          icon={icon}
          placeholder={placeholder}
          key={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div className="title">Create a new post</div>
        <form onSubmit={this.props.handleSubmit(this.props.onPostSubmit)}>
          {this.renderFields()}
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">
                <p style={{ marginRight: '5px' }}>Next</p>
                <i className="fas fa-arrow-circle-right" />
              </button>
            </div>
            <div className="control">
              <Link to="/posts" className="button is-text">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `${name} is missing!`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'postForm',
  destroyOnUnmount: false
})(PostForm);
