import React, { useEffect, useState } from "react";
import Card from "../component/Card/Card";
import Header from "../component/Header/Header";
import axios from "../apiaxios";

const Home = () => {
  const [post, setPost] = useState([]);
  const [postBack, setPostBack] = useState([]);

  useEffect(() => {

    let consulta = async () => {
      await axios.get("/post").then((res) => {
        setPost(res.data.data);
      });
    };
    consulta();
  }, []);

  const handleFiltrar = () => {
    setPostBack(post);
    let temp = post.map((dat) => {
      let temp2 = dat.tags.filter((fil) => fil === "animal");
      console.log(temp2.length);
      if (temp2.length > 0) {
        return dat;
      } else {
        return null;
      }
    });
    temp = temp.filter((fil) => fil !== null);
    setPost(temp);
  };

  const handleBorrarFiltro=()=>{
    setPost(postBack)
  }

  return (
    <div>
      <Header />
     
      <div className="o-container-home">
        <div className="o-div-filtro">
          <p className="o-p-fecha"> Puedes filtrar los post dando clic en los tags</p>
          <br />
          <button className="o-borrar-filtro" onClick={handleBorrarFiltro}>Borrar Filtros</button>
        </div>
  
        <div className="o-div-cards">
          {post.map((dat) => (
            <Card 
            datos={dat} 
            key={dat.id} 
            setPost={setPost}
            setPostBack={setPostBack}
            postBack={postBack}
            post={post}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
