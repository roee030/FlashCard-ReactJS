import React, { Component } from "react";
import apiService from "../service";
import FormToCreateNewCard from "./FormToCreateNewCard";
export default class Manage extends Component {
  state = {
    data: [],
    newCardCollapce: false,
  };
  async componentDidMount() {
    const dataFromApi = await apiService.get();
    console.log(dataFromApi);
    this.setState({ data: dataFromApi.data });
  }

  deletedata = async (id) => {
    await apiService.remove(id);
    await this.getData();
  };
  getData = async () => {
    const dataFromApi = await apiService.get();
    this.setState({ data: dataFromApi.data });
  };
  collapceNewForm = () => {
    this.setState({ newCardCollapce: true });
  };
  FormCollapce = () => {
    this.setState((prev) => ({ newCardCollapce: !prev.newCardCollapce }));
  };
  render() {
    const data = this.state.data.map((e) => {
      return (
        <div key={e.id} className="dataToEdit">
          <p>q:{e.question}</p>
          <p>a:{e.answer}</p>
          <div className="manageBtn">
            <button onClick={() => this.deletedata(e.id)}>Delete</button>
            <button>Edit</button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="addNewCard">
          <button onClick={this.collapceNewForm}>add new card</button>
        </div>
        {this.state.newCardCollapce ? (
          <FormToCreateNewCard colapce={this.FormCollapce} />
        ) : (
          ""
        )}
        <div className="manageData">{data}</div>
      </div>
    );
  }
}
