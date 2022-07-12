import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Hola es la página de Home</h1>;
      <Link href="/products/3">
        <a>Productos</a>
      </Link>
    </div>
  );
};

export default Home;
