import React, { Component } from "react";
import GameCardList from "../Components/GameCardList";
import "../Styles/Cards.css";

export default class DataPage extends Component {
  state = {
    games: [],
    url:
      "https://cors-anywhere.herokuapp.com/https://api.crackwatch.com/api/games?page=2&is_aaa=true"
  };

  async getGameData() {
    try {
      const response = await fetch(this.state.url);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  }

  formatData(itemsArray) {
    let tempItems = itemsArray.map(singleGameItem => {
      const isAAA = singleGameItem.isAAA;
      const isCracked = singleGameItem.groups.length > 0;
      const protections = singleGameItem.protections;
      const groups = singleGameItem.groups;
      const slug = singleGameItem.slug;
      const title = singleGameItem.title;
      const imageUrl = singleGameItem.image;
      const posterUrl = singleGameItem.imagePoster;
      const crackDate = singleGameItem.crackDate;
      // let crackDate = new Date(Date.parse(singleGameItem.crackDate));
      const releaseDate = singleGameItem.releaseDate;
      const singleItem = {
        title: title,
        isAAA: isAAA,
        isCracked: isCracked,
        protections: protections,
        groups: groups,
        slug: slug,
        imageUrl: imageUrl,
        posterUrl: posterUrl,
        crackDate: crackDate,
        releaseDate: releaseDate
      };

      return singleItem;
    });

    this.setState({ games: tempItems });
  }

  async componentDidMount() {
    const tempGameData = await this.getGameData();
    this.setState({
      games: tempGameData
    });
    this.formatData(this.state.games);
    console.log(this.state.games);
  }

  render() {
    return (
      <React.Fragment>
        <GameCardList games={this.state.games} />
      </React.Fragment>
    );
  }
}
