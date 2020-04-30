import React from "react";

export class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };
  handleClick = (e) => {
    console.log("button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("From was submitted");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="font-group">
            <label>Firts Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstname"
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
