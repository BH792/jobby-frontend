import React from "react";

class NewJob extends React.Component {
  state = {
    title: "",
    company: "",
    status: "watching",
    contact: "",
    contacts: []
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addContact = event => {
    event.preventDefault();
    const Contact = this.state.contact;
    this.setState({
      contacts: [...this.state.contacts, Contact],
      contact: ""
    });
  };

  submitNewJob = e => {
    e.preventDefault();
    this.props.closeModal();
    let job = {
      title: this.state.title,
      url: "https://www.google.com",
      status: this.state.status,
      active: true,
      company: { name: this.state.company }
    };
    this.props.addJob(job);
  };

  render() {
    return (
      <div>
        <form id="jobform" onSubmit={this.submitNewJob}>
          <label>
            Job Title:
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </label>
          <br />
          <label>
            Company:
            <input
              type="input"
              name="company"
              onChange={this.onChange}
              value={this.state.company}
            />
          </label>
          <br />
          Status:<select
            name="status"
            value={this.state.status}
            onChange={this.onChange}
          >
            <option value="watching">Watching</option>
            <option value="applied">Applied</option>
            <option value="interviewed">Interviewed</option>
            <option value="offer">Offer</option>
          </select>
          <label>
            <br />
            Add Contact<input
              type="email"
              name="contact"
              onChange={this.onChange}
              value={this.state.contact}
            />
          </label>
          <button onClick={this.addContact}>Add Contact</button>
          {this.state.contacts ? this.state.contacts.join(", ") : null}
          <br />
          <input type="submit" value="Add Job" />
        </form>
      </div>
    );
  }
}

export default NewJob;
