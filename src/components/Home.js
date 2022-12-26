import featImg from "../assets/img-main.jpg";
import UserList from "./User";
import ProductList from "./Product";
import React from "react";

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Red30 Tech conference attendees on a laptop"
      />

        {/*<div className="col">*/}
        {/*    <h1>List User</h1>*/}
        {/*    <UserList/>*/}
        {/*</div>*/}

        <div className="col">
            <h1>List Product</h1>
            <ProductList/>
        </div>

    </div>
  );
}
