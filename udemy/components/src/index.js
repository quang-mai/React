import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        time="Today at 6:00pm"
        content="Nice blog post!"
        avatar={Faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        time="Yesterday at 3:00pm"
        content="Cool!"
        avatar={Faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        time="Yesterday at 5:00"
        content="Awesome!"
        avatar={Faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
