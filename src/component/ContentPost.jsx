import React, { useState } from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import Item from "./Item";
export default function ContentPost() {
  const data = [
    {
      id: 1,
      profile: "../../public/yui.jpg",
      name: "Phonesavang",
      caption: "Hello word",
      img: "../../public/yui.jpg",
    },
    {
      id: 2,
      profile: "../../public/yui.jpg",
      name: "yui",
      caption: "Hello word",
      img: "../../public/yui.jpg",
    },
    {
      id: 3,
      profile: "../../public/yui.jpg",
      name: "Phonesavang",
      caption: "Hello word",
      img: "../../public/yui.jpg",
    },
  ];
  const [listData, setListData] = useState([]);
  const addPost = (post) => {
    setListData((old) => {
      return [post, ...old];
    });
  };
  const delItem = (id) => {
    alert("Delete");
    const newItem = listData.filter((elm) => elm.id != id);
    setListData(newItem);
  };
  return (
    <div className="pb-4">
      <Navbar />
      <Post addPost={addPost} />
      {listData.map((elm) => {
        return <Item key={elm.id} {...elm} delItem={delItem} />;
      })}
    </div>
  );
}
