import React, { useEffect, useState } from "react";
import "./Card.css";
import like from "../../assets/like.png";
import comentario from "../../assets/comentarios.png";
import Modal from "../Modal/Modal";
import axios from "../../apiaxios";

const Card = ({ datos, setPost, setPostBack, postBack, post }) => {
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState([]);
  

  useEffect(() => {
    axios.get(`/post/${datos.id}/comment`).then((res) => {
      setComment(res.data.data);
    });
  }, [datos]);

  const handleShow = () => {
    setShow(!show);
  };

  const handleShowuser = async () => {
   await axios.get(`/user/${datos.owner.id}`).then((res) => {
      setUser(res.data);
      setShowUser(!showUser);
      console.log(res.data)
    });  
  };

  
const handleFiltrar=(string)=>{
  if(postBack.length===0){
    setPostBack(post)
  }
  
  let temp = post.map(dat=> {
    let temp2 =dat.tags.filter(fil=>fil===string)
    console.log(temp2.length)
    if(temp2.length>0){
      return dat
    }else{
      return null
    }
  })
  temp = temp.filter(fil=>fil!==null)
  setPost(temp)
}

  
  return (
    <>
      <div className="o-div-card">
        <div className="o-card o-alinear-ver">
          <div className="o-alinear-hor">
            <div className="o-div-cero">
              <img
                src={datos.image}
                alt="imagen"
                className="o-img"
                onClick={()=>handleShow()}
              />
            </div>

            <div className="o-div-img-owner">
              <div>
                <img
                  src={datos.owner.picture}
                  alt="imagen-autor"
                  className="o-img-owner"
                />
              </div>
            </div>
          </div>
          <div className="o-alinear-hor space-between">
            <p className="o-p-titulo2" onClick={()=>handleShowuser()}>
              {datos.owner.firstName + " " + datos.owner.lastName}
            </p>
            <div className="o-alinear-hor ">
              <div className="o-alinear-hor mr-1">
                <img src={comentario} alt="comentario" className="o-img-comment"  onClick={()=>handleShow()}/>
                <p className="o-p-titulo margin-0">{comment.length}</p>
              </div>
              <div className="o-alinear-hor ">
                <img src={like} alt="like" className="o-img-like" />
                <p className="o-p-titulo margin-0">{datos.likes}</p>
              </div>
            </div>
          </div>
          <p className="o-p-fecha"> {datos.publishDate}</p>
          <br />
          <p className="o-p-fecha"> {datos.text}</p>
          <div className="o-div-tags">
            {datos.tags.map((tag, i) => (
              <p className="o-p-tag " key={"tag"+i} onClick={()=>handleFiltrar(tag)}>{tag}</p>
            ))}
          </div>
        </div>
      </div>
      {show === true && (
        <Modal show={show} setShow={setShow} titulo="Comentarios">
          <div>
            {comment.length === 0 ? 
              <h5 className="o-titulo-modal">
                {"No hay comentarios para este post"}
              </h5>
            :
            comment.map((dat) => (
              <div className="o-div-commentarios" key={"commet"+dat.id}>
                <div className="o-alinear-hor center">
                  <p className="o-p-titulo">{dat.message}</p>{" "}
                  <p className="o-p-fecha">{` - ${dat.owner.firstName} ${dat.owner.lastName}`}</p>
                </div>
                <p className="o-p-fecha">{dat.publishDate}</p>
              </div>
            ))}
          </div>
        </Modal>
      )}

      {showUser === true  ? (
        <Modal show={showUser} setShow={setShowUser} titulo="Información del Autor">
          <div>
              <div className="o-div-commentarios">
                <div className="o-alinear-hor center">
                <img
                  src={datos.owner.picture}
                  alt="imagen-autor"
                  className="o-img-owner mr-1"
                />
                  <p className="o-p-titulo"><b className="title">{user.title+" "}</b>{user.firstName+" "+user.lastName}</p>
                </div>
                <br />
                <p className="o-p-fecha pb-1"><b className="mr-1">Fecha de Nacimiento:</b>{user.dateOfBirth}</p>
                <p className="o-p-fecha pb-1"><b className="mr-1">Telefono:</b>{user.phone}</p>
                <p className="o-p-fecha pb-1"><b className="mr-1">E-mail:</b>{user.email}</p>
                <p className="o-p-fecha pb-1"><b className="mr-1">Genero:</b>{user.gender}</p>
                <p className="o-p-fecha pb-1"><b className="mr-1">Localizacion:</b>{user.location.country+" "+user.location.state+" "+user.location.city+" "+user.location.street}</p>
              </div>
              <br />
          </div>
        </Modal>
      ):null}
    </>
  );
};

export default Card;
