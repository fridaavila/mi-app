import { useEffect, useState } from "react";

const ConsumiendoApis = () => {
  // const [ posts, setPosts ] = useState ([])

  // useEffect( ()=> {

  //     const getData = fetch("https://jsonplaceholder.typicode.com/posts")

  //     getData
  //      .then(res => res.json() )
  //      .then(res => setPosts(res))
  //      .catch(err => console.log("catch: ",err))

  // } , [])

  // console.log(posts)

  const [isCreated, setIsCreated] = useState(false);

  const crearPost = () => {
    const createPost = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "aplication/json",
      },
      body: JSON.stringify({
        title: "esta es una prueba del front",
        userId: 2,
        body: "probando el post",
      }),
    });

    createPost.then((res) => setIsCreated(true));
  };
  console.log(isCreated);

  return (
    <div>
      <button onClick={crearPost}>crear post</button>
    </div>
  );
};

export default ConsumiendoApis;
