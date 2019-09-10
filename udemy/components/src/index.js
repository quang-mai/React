import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          time="Today at 6:00pm"
          content="Nice blog post!"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          time="Yesterday at 3:00pm"
          content="Cool!"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          time="Yesterday at 5:00"
          content="Awesome!"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>

      <Message
        header="Changes in Service"
        text="We just updated our privacy policy here to better service our customers."
      ></Message>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
