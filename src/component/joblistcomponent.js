import React from 'react';
import { Component } from 'react';
import { form } from 'reactstrap';


class Jobcomponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mt-4">
        <h1 className="display-4 text-center"><i className="fas fa-briefcase text-primary"></i>My<span classNameName="text-primary">Job</span>List</h1>
        <form id="job-form">
          <div className="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" className="form-control" />
          </div>
          <div className="form-group">
            <label for="author">Author</label>
            <input type="text" id="author" className="form-control" />
          </div>
          <div className="form-group">
            <label for="isbn">ISBN</label>
            <input type="text" id="isbn" className="form-control" />
          </div>
          <input type="submit" value="add job"
            className="btn btn-primary btn-block" />
        </form>
        <table className="table table-stripped mt-5">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="book-list"></tbody>
        </table>
      </div>
    );
  }
}
export default Jobcomponent;
