import { comment } from "postcss";
import React from "react";

const coomentsData = [
  {
    name: "Vartika Tiwari",
    text: "Lorem ipsum dolor",
    replies: [
      {
        name: "Vartika Tiwari",
        text: "Lorem ipsum dolor",
        replies: [],
      },
      {
        name: "Vartika Tiwari",
        text: "Lorem ipsum dolor",
        replies: [],
      },
    ],
  },
  {
    name: "Vartika Tiwari",
    text: "Lorem ipsum dolor",
    replies: [
      {
        name: "Vartika Tiwari",
        text: "Lorem ipsum dolor",
        replies: [
          {
            name: "Vartika Tiwari",
            text: "Lorem ipsum dolor",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Vartika Tiwari",
    text: "Lorem ipsum dolor",
    replies: [
      {
        name: "Vartika Tiwari",
        text: "Lorem ipsum dolor",
        replies: [
          {
            name: "Vartika Tiwari",
            text: "Lorem ipsum dolor",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({data})=>{
    const { name,text,replies} = data;
    return <div className="flex"> 
        <img alt="" src="https://icon-library.com/images/generic-user-icon/generic-user-icon-13.jpg"
        className="w-12 h-12 p-3"
        />
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
}
const CommentList =({comments})=>{
  
    return comments.map((comment,index)=>(
        <div>
            <Comment key={index} data={comment}/>
            <div className="pl-5 border border-l-black ml-5">
              <CommentList comments={comment.replies}/>
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={coomentsData}/>
    </div>
  );
};

export default CommentsContainer;
