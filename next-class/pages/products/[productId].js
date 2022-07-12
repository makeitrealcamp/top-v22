import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Products = ({ dataRickMorty }) => {
  const router = useRouter();
  const [data, setData] = useState(dataRickMorty);

  useEffect(() => {
    fetch("/api/hello").then((res) => {
      console.log("respuesta api next:", res);
    });
  });

  const handleClick = () => {
    router.push({
      pathname: "/home",
      query: { token: "tokenNextApp" },
    });
  };

  return (
    <div>
      <p>
        {`Página principal de producto: este es el producto ${dataRickMorty.name}`}{" "}
      </p>
      <button onClick={handleClick}>Ir al Home</button>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const apiRickMorty = await fetch(
    `https://rickandmortyapi.com/api/character/${params.productId}`,
    {
      method: "GET",
    }
  );
  const dataRickMorty = await apiRickMorty.json();
  console.log("dataServer:", dataRickMorty);

  return {
    props: {
      dataRickMorty,
    }, // will be passed to the page component as props
  };
}

export default Products;
