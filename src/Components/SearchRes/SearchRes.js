import React from "react";
import "./SearchRes.css";
import { ResCard } from "../ResCard/ResCard";
import Swiper from "react-id-swiper";
const params = {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
export class SearchRes extends React.Component {
  render() {
    return (
      <Swiper {...params} slideClass='search-slide' containerClass='search-swiper-container'>
        {this.props.searchResults.map((result) => {
          return (
            <div>
              <ResCard
                key={result.id}
                object={result}
                handleClick={this.props.handleClick}
                handleAddClick={this.props.handleAddClick}
                handleRemove={this.props.handleRemove}
                parent={"searchres"}
                inTeam={false}
              />
            </div>
          );
        })}
      </Swiper>
    );
  }
}
