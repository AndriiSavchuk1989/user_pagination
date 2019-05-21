import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import PaginationTabla from "./Pagination";

import "./styles.css";

class DataComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      itemsperpage: 1,
      nocolumns: 2,
      items: 5
    };
    this.showState = this.showState.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  componentDidMount() {
    console.log("initial state", this.state);
    this.getAllUsers();
    // this.interval = setInterval(this.getAllUsers, 1000);
  }

  getAllUsers() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response =>
        this.setState({ users: [...this.state.users, ...response.data] })
      );
  }

  showState() {
    console.log("____users____", this.state.users);
  }
  render() {
    console.log("this.state", this.state);
    return (
      <div>
        {this.state.users.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <PaginationTabla
            itemsperpage={this.state.itemsperpage}
            nocolumns={this.state.nocolumns}
            items={this.state.users}
            pagesspan={20}
          />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DataComponent />, rootElement);
