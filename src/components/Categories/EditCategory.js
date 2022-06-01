import React from "react";
 import './Catgory.css'
import Header from "../Header";
import Sidebar from "../sidebar";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";

const EditCategory = () => {
  const [name, setNom] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();


  const getCategorie = async () => {
    
    axios.get('http://localhost:8080/api/category/getSingleCategory/' + id).then((res) => {
      console.log(res.data.name);
      setNom(res.data.name);
      setDescription(res.data.description)
    }).catch(err => {
      console.log(err)
    })
  };

  const updateCategorie = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      description: description
    }
    console.log(data);
    axios.put('http://localhost:8080/api/category/UpdateCategory/' + id, data).then((res) => {
      getCategorie()
    }).catch(err => {
      console.log(err)
    })
  };
  useEffect(() => {
    getCategorie()
  }, []);



  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />


        <div className="row rowup">
          <div className="col-md-12 col-lg-8">

            <form>
              <div className="mb-4">
                <label htmlFor="nom" className="form-label">
                  Nom
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="form-control py-3"
                  value={name}

                  onChange={(event)=> {
                    setNom(event.target.value);
                   
                  }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Description</label>
                <textarea
                  placeholder="Type here"
                  className="form-control"
                  rows="4"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);

                  }}
                ></textarea>
              </div>

              <div className="d-grid">
                <button onClick={updateCategorie} className="btn btn-dark py-3 buttonC  ">update category</button>

              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default EditCategory;
