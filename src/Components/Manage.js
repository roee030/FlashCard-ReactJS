import React, { Component } from "react";
import apiService from "../service";
import FormToCreateNewCard from "./FormToCreateNewCard";
export default class Manage extends Component {
  state = {
    data: [],
    newCardCollapce: false,
    openEditPopUp: false,
    currentIdForEdit: null,
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
  openEditPopUp = () => {
    this.setState((prev) => ({ openEditPopUp: !prev.openEditPopUp }));
  };
  addCardToDeck = async (q, a) => {
    console.log("add card");
    await apiService.create({ question: q, answer: a });
    this.setState({ newCardCollapce: false });
    await this.getData();
  };
  editCardToDeck = async (q, a) => {
    await apiService.update(this.state.currentIdForEdit, {
      question: q,
      answer: a,
    });
    this.setState({ openEditPopUp: false });
    await this.getData();
  };
  render() {
    const data = this.state.data.map((e) => {
      return (
        <div key={e.id} className="dataToEdit">
          <p>q:{e.question}</p>
          <p>a:{e.answer}</p>
          <div className="manageBtn">
            <button onClick={() => this.deletedata(e.id)}>Delete</button>
            <button
              onClick={() =>
                this.setState({ currentIdForEdit: e.id, openEditPopUp: true })
              }
            >
              Edit
            </button>
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
          <FormToCreateNewCard
            colapce={this.FormCollapce}
            addCardToDeck={this.addCardToDeck}
          />
        ) : (
          ""
        )}
        {this.state.openEditPopUp ? (
          <FormToCreateNewCard
            colapce={this.openEditPopUp}
            addCardToDeck={this.editCardToDeck}
          />
        ) : (
          ""
        )}
        <div className="manageData">{data}</div>
      </div>
    );
  }
}
