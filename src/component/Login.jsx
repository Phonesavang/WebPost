import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import "./login.css";
import addUser from "../assets/image/add-user.png";
export default function Login({ dataItem }) {
  const id = uuid();
  const navigate = useNavigate();
  const [imgS, setImg] = useState("");
  const [user, setUser] = useState("");
  const inputRef = useRef(null);
  const subMit = async (e) => {
    if (e.key === "Enter" && user && imgS) {
      const data = {
        id,
        img: URL.createObjectURL(imgS),
        name: user,
      };
      await dataItem(data);
      setImg("");
      setUser("");
      navigate("/content");
    }
  };
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "100vh" }}
    >
      <div className="text-center bg-sky-50 border-2 border-blue-200 rounded-md py-10 px-20 drop-shadow-xl">
        <h1 className="text-4xl font-bold text-blue-600">WEB POST</h1>
        <h1 className="text-xl font-bold text-blue-600 mb-3 mt-8">Your Profile</h1>
        <div className="mb-5 drop-shadow-xl" onClick={() => inputRef.current.click()}> 
          <img
            src={imgS ? URL.createObjectURL(imgS) : addUser}
            alt=""
            className="border-4 border-blue-600 rounded-full h-56 w-56 block m-0 cursor-pointer"
          />
          <input
            type="file"
            className="my-4 hidden"
            ref={inputRef}
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <input
          onKeyDown={subMit}
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="Username"
          className="block user focus:bg-[#fff]"
          value={user}
        />
      </div>
    </div>
  );
}
