import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          content="Nice post"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 4:43PM"
          avatar={faker.image.avatar()}
          content="Greattt post"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 9:44PM"
          avatar={faker.image.avatar()}
          content="Asadsd post"
        />
      </ApprovalCard>
    </div>
  );
};
console.log("asd");
ReactDOM.render(<App />, document.querySelector("#root"));
