import React, { useState, useRef, useContext } from "react";
import "./post.css";
import { DataContext } from "../App";
import uuid from "react-uuid";
import add_img from "../assets/image/add_img.png";
import user from "../assets/image/user.png";
function Post({ addPost }) {
  const dataUser = useContext(DataContext);
  const id = uuid();
  const [inputText, setText] = useState("");
  const [img, setImg] = useState("");
  const inputRef = useRef(null);
  const subMitForm = (e) => {
    e.preventDefault();
    const check = inputText && img;
    if (check) {
      const dataPost = {
        id,
        caption: inputText,
        img: URL.createObjectURL(img),
      };
      addPost(dataPost);
      alert("Post");
      setText("");
      setImg("");
    }
  };
  return (
    <div>
      <div className="container px-8 sm:px-10 max-w-2xl mx-auto border rounded-md mt-5 py-10 bg-slate-100">
        <form onSubmit={subMitForm}>
          <div className="flex items-center" style={{ gap: "0.5rem" }}>
            <img
              src={dataUser.img ? dataUser.img : user}
              alt=""
              className="rounded-full h-11 w-14 block m-0 "
            />
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={inputText}
              placeholder="message"
              className="input-text"
            />
            <div onClick={() => inputRef.current.click()}>
              <img
                src={add_img}
                className="w-16 h-14 rounded-sm cursor-pointer"
                alt=""
              />
              <input
                type="file"
                ref={inputRef}
                onChange={(e) => setImg(e.target.files[0])}
                className="hidden"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-3 border rounded-md bg-blue-600 text-white w-full h-10 text-lg"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Post;
