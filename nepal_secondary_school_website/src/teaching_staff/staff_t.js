import React, { useState, useEffect } from "react";
import "../teaching_staff/staff.css";
import Accordian from "../component/new/footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";

export default function Staff_t({ setProgress }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  // Fetching the data from the backend
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://backend.nepalmodelsecondaryschool.com/calling"
      );
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
      setError("Error fetching images");
    }
  };

  useEffect(() => {
    setProgress(40);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);

  return (
    <>
      <Helmet>
        <title>Teaching Staff | Nepal Model Secondary School</title>
        <meta
          name="description"
          content="Meet our dedicated teaching staff at Nepal Model Secondary School. Explore their profiles and subjects taught."
        />
        <meta
          property="og:title"
          content="Teaching Staff | Nepal Model Secondary School"
        />
        <meta
          property="og:description"
          content="Meet our dedicated teaching staff at Nepal Model Secondary School. Explore their profiles and subjects taught."
        />
      </Helmet>

      <div className="foot">
        <div className="all">
          <div className="container line">
            <h1 className="hq">Teaching Staffs of NMSC</h1>
          </div>
          <hr />
          <div className="grid-container">
            {images.length > 0 ? (
              images.map((Image, index) => (
                <div className="card" key={index} id={Image._id}>
                  <div className="img-container">
                    <img
                      src={`https://backend.nepalmodelsecondaryschool.com/${Image.url}`}
                      alt=""
                      className="image"
                    />
                  </div>
                  <h1>{Image.title1} </h1>
                  <p>post : {Image.title2}</p>
                  <p>Subject : {Image.title3}</p>

                  <p>
                    Contact :{" "}
                    <Link to={`tel:${Image.paragraph}`}>{Image.paragraph}</Link>
                  </p>
                  {/* Delete button */}
                </div>
              ))
            ) : (
              <div>loading</div>
            )}
          </div>
        </div>
      </div>
      <Accordian />
    </>
  );
}
