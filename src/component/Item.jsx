import React, { useContext } from "react";
import { DataContext } from "../App";
import user from "../assets/image/user.png";
import close from "../assets/image/close.png";
export default function Item({ id, img, caption, delItem }) {
  const dataUser = useContext(DataContext);
  return (
    <div
      dir={id}
      className="container max-w-2xl mx-auto border rounded-md mt-10 bg-slate-50"
    >
      <div className="container px-8 sm:px-10 max-w-2xl mx-auto py-2 bg-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: "1rem" }}>
            <img
              src={dataUser.img ? dataUser.img : user}
              className="rounded-full h-10 w-10 block m-0 "
              alt=""
            />
            <h2 className="text-2xl text-slate-600 font-bold">
              {dataUser.name ? dataUser.name : "Phonesavang"}
            </h2>
          </div>
          <img
            src={close}
            onClick={() => delItem(id)}
            className="cursor-pointer h-4 w-4"
          />
        </div>
      </div>
      <div className="container px-8 sm:px-10 max-w-2xl mx-auto">
        <p className="my-2 text-lg">{caption}</p>
      </div>
      <div className="container max-w-2xl">
        <img src={img} className="w-full h-[35rem]" alt="" />
      </div>
    </div>
  );
}
