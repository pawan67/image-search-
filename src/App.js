import React from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import unsplash from "./api/unsplash";
import ImageList from "./components/ImageList";

class App extends React.Component {
state = { images: [] }

   onSearchSubmit = async (term)=> {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
      
    });

    console.log(this)
    this.setState({ images : response.data.results});
  }

  render() {
    return (
      <div className="ui container " style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
       <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
