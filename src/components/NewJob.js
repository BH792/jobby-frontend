import React from "react";
import styles from "../css/NewJob.css";

class NewJob extends React.Component {
  state = {
    title: "",
    company: "",
    status: "watching",
    valid: true
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addContact = event => {
    event.preventDefault();
    const contact = this.state.contact;
    if (contact !== "") {
      this.setState({
        contacts: [...this.state.contacts, contact],
        contact: ""
      });
    }
  };

  submitNewJob = e => {
    e.preventDefault();
    let job = {
      title: this.state.title,
      status: this.state.status,
      active: true,
      company: { name: this.state.company }
    };
    if (job.title === "" || job.status === "" || job.company.name === "") {
      this.setState({ valid: false });
    } else {
      this.props.closeModal();
      this.props.addJob(job);
    }
  };

  render() {
    return (
      <div className={styles.NewJob}>
        <form id="jobform" onSubmit={this.submitNewJob}>
          {this.state.valid ? null : (
            <div className={styles.Error}>
              <div className={styles.ErrorMessage}>Invalid Entry</div>
            </div>
          )}
          <input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
            placeholder="Title"
          />
          <input
            type="text"
            name="company"
            onChange={this.onChange}
            value={this.state.company}
            placeholder="Company"
          />
          <br />
          <select name="status" onChange={this.onChange}>
            <option selected disabled>
              Select Status
            </option>
            <option value="watching">Watching</option>
            <option value="applied">Applied</option>
            <option value="interviewed">Interviewed</option>
            <option value="offer">Offer</option>
          </select>
          <br />

          <input type="submit" value="Add Job" id="addJob" />
        </form>
      </div>
    );
  }
}

export default NewJob;
