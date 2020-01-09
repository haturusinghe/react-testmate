import React, { Component } from "react";
import PaperData from "../Data/PaperData";

const PaperContext = React.createContext(); //define the context

//create ContextProvider class
export default class PaperProvider extends Component {
  //define initial state of Paper Context
  state = {
    papers: [],
    physicsPapers: [],
    chemistryPapers: [],
    sortedPapers: [],
    featuredPapers: [],
    loading: true
  };

  //changes initial state values as soon as the Component Mounts
  componentDidMount() {
    let allPapers = this.formatData(PaperData);

    let physicsPapers = allPapers.filter(
      singlePaper => singlePaper.subject === "physics"
    );

    let chemistryPapers = allPapers.filter(
      singlePaper => singlePaper.subject === "chemistry"
    );

    let featuredPapers = allPapers.filter(
      singlePaper => singlePaper.featured === true
    );

    // let maxPrice = Math.max(...rooms.map(item => item.price));
    // let maxSize = Math.max(...rooms.map(item => item.size));

    this.setState({
      papers: allPapers,
      physicsPapers: physicsPapers,
      chemistryPapers: chemistryPapers,
      featuredPapers,
      loading: false
    });
  }

  getPaper = (slug, papers) => {
    let tempItems = { ...this.state.papers };
    // const paper = tempItems.find(paper => paper.slug === slug);
    const paper = tempItems.find(room => room.slug === slug);
    return paper;
  };

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let singlePaper = { ...item.fields, id: id, images: images };
      return singlePaper;
    });
    return tempItems;
  }

  render() {
    /*Return a PaperContext.Provider Element with value props being equal to values you need to pass*/
    return (
      <PaperContext.Provider value={{ ...this.state, getPaper: this.getPaper }}>
        {this.props.children}
      </PaperContext.Provider>
    );
  }
}

const PaperConsumer = PaperContext.Consumer;

export function withPaperConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <PaperConsumer>
        {value => {
          return <Component {...props} context={value} />;
        }}
      </PaperConsumer>
    );
  };
}

export { PaperConsumer, PaperProvider, PaperContext };
