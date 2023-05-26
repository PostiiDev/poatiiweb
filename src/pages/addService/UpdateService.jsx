import React, { useReducer,  useState } from "react";
import { useParams } from "react-router-dom";
import "./addService.scss";
import getCurrentUser from '../../utils/getCurrentUser.js'
import { offreReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient, useQuery  } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const UpdateOffre = () => {
  const { id } = useParams();
  const [offre, setOffre] = useState(null);
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [ dispatch] = useReducer(offreReducer, INITIAL_STATE); //state,
  const queryClient = useQueryClient();
  const currentUser = getCurrentUser();

const fetchMyOffres = async () => {
    const res = await fetch(`/offre/${currentUser._id}`);
    return res.json();
  }

  const { data: myOffres } = useQuery(['myOffre'], fetchMyOffres, { cacheTime: 0 });


  const mutation = useMutation({
    mutationFn: (myOffre) => {
      return newRequest.put(`/offre/${id}`, myOffre);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myOffre"]);
    },
  });


  const handleChange = (e) => {
    setOffre({...offre, [e.target.name]: e.target.value});
  };
  

  const navigate = useNavigate();
  const handleSubmit = (e) => {

    e.preventDefault();
    try {
    // console.log(offre)
    mutation.mutate(offre);
    navigate(`/myoffres/${currentUser._id}`);
  
} catch (error) {
    // handle any errors here...
    console.error(error);
  }
};

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );

      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  


  return (
    <div className="add">
      <div className="container">
        <h1>Edit Offre</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            
            <label htmlFor="">Category</label>
<select 
    name="category" 
    id="cat"
    onChange={handleChange}
> 
    <option value="design">Design</option>
    <option value="web">Web Development</option>
    <option value="animation">Animation</option>
    <option value="music">Music</option>
</select>
{/* 
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button 
              onClick={handleUpload}
              >
                {uploading ? "uploading" : "Upload"}
              </button>
            </div> */}
            <label htmlFor="">Description</label>
            <textarea
              name="Description"
              id=""
              placeholder="Brief descriptions to introduce your service "
              cols="0"
              rows="16"
              onChange={handleChange}
            ></textarea>
            
            <label htmlFor="">deadline</label>
            <input
              type="text"
              name="deadLine"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            <label htmlFor="">Prix Max</label>
            <input
              type="text"
              name="prix"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            <button 
            onClick={handleSubmit}
            >Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateOffre;
