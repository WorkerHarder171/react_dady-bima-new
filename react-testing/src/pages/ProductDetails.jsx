import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  // pengambilan data object dari redux
  const products = useSelector((state) => state.list.products)
  const product = products.find((product) => product.id === id);
  const { name, category, image, freshness, additional, price } = product;

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center">
        <div className="w-75 p-5">
          <p className="display-4 text-center">Product Details</p>
          <img
            className="card-img-top d-flex mx-auto p-5 w-50 justify-content-center "
            src={image}
            alt={name}
          />
          <div className="card-body">
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Id</th>
                  <td>{id}</td>
                </tr>
                <tr>
                  <th scope="row">Nama Produk:</th>
                  <td>{name}</td>
                </tr>
                <tr>
                  <th scope="row">Kategori Produk:</th>
                  <td>{category}</td>
                </tr>
                <tr>
                  <th scope="row">Freshness:</th>
                  <td>{freshness}</td>
                </tr>
                <tr>
                  <th scope="row">Deskripsi Tambahan:</th>
                  <td>{additional}</td>
                </tr>
                <tr>
                  <th scope="row">Harga</th>
                  <td>${price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        <Link to={"/dashboard"} type="button" className="btn mt-3 btn-primary w-100">
          Back
        </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
