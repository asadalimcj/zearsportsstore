import React from "react";
import caro1 from "../imag/caro1.jpg";
import caro2 from "../imag/products/14.png";
import caro3 from "../imag/products/shoegloves2.webp";
function Carousal() {
  return (
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
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
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
  );
}
export default Carousal;
