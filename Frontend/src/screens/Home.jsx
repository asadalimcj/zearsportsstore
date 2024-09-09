import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import caro1 from "../imag/caro1.jpg";
import caro2 from "../imag/products/14.png";
import caro3 from "../imag/products/shoegloves2.webp";
import Whyus from "./Whyus";
import Newsletter from "../components/Newsletter";

function Home() {
  const [search, setsearch] = useState("");
  const [itemData, setItemData] = useState([]);
  const [catagory, setcatagory] = useState([]);
  const loaddata = async () => {
    let response = await fetch("http://localhost:8500/api/itemdata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    setItemData(data[0]);
    setcatagory(data[1]);
  };
  useEffect(() => {
    loaddata();
  }, []);

  function handleChange(e) {
    setsearch(e.target.value);
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExample"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-caption d-none d-md-block"
              style={{ zIndex: "10" }}
            >
              <div className="d-flex justify-content-center" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={handleChange}
                />
                {/* <button className="btn btn-outline-danger" type="submit">
                  Search
                </button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src={caro1}
                style={{ height: "600px", filter: "brightness(30%)" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={caro2}
                style={{ height: "600px", filter: "brightness(30%)" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={caro3}
                style={{ height: "600px", filter: "brightness(30%)" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <Whyus />{" "}
      </div>
      {catagory.length > 0
        ? catagory.map((d) => {
            return (
              <div key={d._id} className="fs-3 m-3 section-P row">
                {d.CategoryName}
                <hr></hr>
                {itemData.length > 0
                  ? itemData
                      .filter(
                        (data) =>
                          data.CategoryName === d.CategoryName &&
                          data.name
                            .toLowerCase()
                            .includes(search.toLocaleLowerCase())
                      )
                      .map((item) => {
                        return (
                          <div
                            className="col-12 col-md-6 col-lg-3"
                            key={item._id}
                          >
                            <Card dataItem={item} options={item.options[0]} />
                          </div>
                        );
                      })
                  : ""}
              </div>
            );
          })
        : "null"}
      <div className="section-p">
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
export default Home;
