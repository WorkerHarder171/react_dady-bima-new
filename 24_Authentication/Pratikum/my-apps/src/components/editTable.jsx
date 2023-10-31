import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editApiProduct } from "../redux/productSlice";
// import { v4 as uuid } from "uuid";

function EditTable() {
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useSelector((state) => state.list.products);
  const checkProduct = products.filter((data) => data.id === id);
  console.log("ini cek =>", checkProduct[0]);
  const { name, image, category, freshness, additional, price } =
    checkProduct[0];
  const dispatch = useDispatch();

  //Input Use State
  const [product, setProduct] = useState({
    productName: name,
    productCategory: category,
    productFreshness: freshness,
    additionalDesc: additional,
    productPrice: price,
  });

  const [file, setFile] = useState(image);
  const [fields, setFields] = useState();
  // Validasi
  const [validation, setValidation] = useState({});

  //Variable Regular Expression
  const productNameRegex = /^[a-zA-Z\s]{1,25}$/;
  const imageRegex = /\.(jpg|jpeg|png)$/i;
  const productPriceRegex = /^\d+(\d{1,2})?$/;

  // membuat validasi untuk product name
  const validateProduct = () => {
    let isValid = true;
    const errors = {};

    // Validasi Nama Produk
    if (!product.productName) {
      errors.productName = "Please enter a valid Product name";
      isValid = true;
      if (productNameRegex.test(product.productName)) {
        errors.productName = "Please enter a valid Product name";
        isValid = true;
      }
    } else if (product.productName.length > 25) {
      errors.productName = "Product Name must not exceed 25 characters";
      isValid = true;
    } else if (product.productName.length < 3) {
      errors.productName = "Product Name must be at least 3 characters.";
      isValid = true;
    } else {
      errors.productName = "";
      isValid = false;
    }
    // Validasi Gambar Produk
    if (!imageRegex.test(product.imageProduct)) {
      errors.imageProduct = "Please upload a file jpg, jpeg, or png";
      isValid = true;
    } else {
      errors.imageProduct = "";
      isValid = false;
    }

    // Validasi Kesegaran Produk
    if (product.productFreshness === "") {
      errors.freshness = "Please select a freshness option";
      isValid = true;
    } else {
      errors.productFreshness = "";
      isValid = false;
    }

    // Validasi Harga Produk
    if (!productPriceRegex.test(product.productPrice)) {
      errors.productPrice = "Please input a valid number";
      isValid = true;
    } else {
      errors.productPrice = "";
      isValid = false;
    }

    // Set pesan kesalahan validasi
    setValidation(errors);

    return isValid;
  };

  //Convert file gambar
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  //Event handleOnChange
  const handleOnChange = async (e) => {
    e.preventDefault();
    const { name, value, type } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      setFile(URL.createObjectURL(file));

      const base64 = await convertToBase64(file);
      setFields({
        ...fields,
        [e.target.name]: base64,
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
    validateProduct();
  };

  //Event handleSubmit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const hasError = validateProduct();

    //cek jika masih ada error yang ada di validate produk maka tidak akan terkirim
    if (!hasError) {
      dispatch(
        editApiProduct({
          id: id ,
          name: product.productName,
          category: product.productCategory,
          image: file,
          freshness: product.productFreshness,
          additional: product.additionalDesc,
          price: product.productPrice,
        })
      );
      console.log(editApiProduct());
      navigate("/dashboard");
      alert("Data Tersimpan!");
    } else {
      alert("Data Invalid");
    }
  };

  return (
    <main>
      {/* Form New */}
      <form className="mx-auto my-5 w-50" onSubmit={handleOnSubmit}>
        <div className="form-header">
          <h1 className="text-center">Edit Product</h1>
        </div>
        <div className="form-body">
          {/* Product Name */}
          <div className="product-name mt-3">
            <p className="text-start" htmlFor="productName">
              Product Name
            </p>
            <input
              type="text"
              id="productName"
              name="productName"
              value={product.productName || ""}
              onChange={handleOnChange}
              className="form-control"
              style={{
                border: validation?.productName
                  ? "2px solid red"
                  : "1px solid #ccc", // deepscan-disable-line // deepscan-disable-line INSUFFICIENT_NULL_CHECK
              }}
            />
            {/* Menampilkan pesan error */}
            {validation?.productName && (
              <div className="error py-2" style={{ color: "red" }}>
                {validation?.productName}
              </div>
            )}
          </div>
          {/* End of Product Name */}
          {/* Product Category */}
          <div className="product-category mt-3">
            <p className="text-start">Product Category</p>
            <select
              className="form-select"
              id="floatingSelectGrid"
              name="productCategory"
              value={product.productCategory  }
              onChange={handleOnChange}
            >
              <option value="choose">Choose...</option>
              <option value="volvo">Volvo</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          {/* End of Product Category */}
          {/* Image of Product */}
          <div className="image-of-product mt-3">
            <p className="text-start">Image Of Product</p>
            <div className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
                name="imageProduct"
                files={product.imageProduct}
                onChange={handleOnChange}
              />
            </div>
            {validation?.imageProduct && (
              <p className="error py-2" style={{ color: "red" }}>
                {validation?.imageProduct}
              </p>
            )}
          </div>
          {/* End of Image of Product */}
          {/* Product Freshness */}
          <div className="product-freshness mt-3">
            <p className="text-start">Product Freshness</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="productFreshness"
                id="flexRadioDefault1"
                value="Brand New"
                checked={product.productFreshness === "Brand New"}
                onChange={handleOnChange}
              />
              <label
                className="form-check-label text-start"
                htmlFor="flexRadioDefault1"
              >
                Brand New
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="productFreshness"
                id="flexRadioDefault2"
                value="Second Hand"
                checked={product.productFreshness === "Second Hand"}
                onChange={handleOnChange}
              />
              <label
                className="form-check-label text-start"
                htmlFor="flexRadioDefault2"
              >
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="productFreshness"
                id="flexRadioDefault3"
                value="Refurbished"
                cheked={product.productFreshness === "Refurbished"}
                onChange={handleOnChange}
              />
              <label
                className="form-check-label text-start"
                htmlFor="flexRadioDefault3"
              >
                Refurbished
              </label>
            </div>
            {validation?.productFreshness && (
              <p className="error py-2" style={{ color: "red" }}>
                {validation?.productFreshness}
              </p>
            )}
          </div>
          {/* End of Product Freshness */}
          {/* Additional Description */}
          <div className="additional-desc mt-3">
            <p className="text-start">Additional Description</p>
            <textarea
              name="additionalDesc"
              id="add-desc"
              cols={30}
              rows={10}
              className="form-control"
              value={product.additionalDesc}
              onChange={handleOnChange}
            />
            {/* End of Additional Description */}
          </div>
          {/* Product Price */}
          <div className="product-price mt-3">
            <p className="text-start">Product Price</p>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                type="number"
                name="productPrice"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                id="productPrice"
                value={product.productPrice}
                onChange={handleOnChange}
              />
            </div>
            {validation?.productPrice && (
              <p className="error py-2" style={{ color: "red" }}>
                {validation?.productPrice}
              </p>
            )}
          </div>
          {/* End of Product Price */}
          {/* Buttons */}
          <div className="w-50 mx-auto d-flex gap-3 justify-content-center align-items-center ">
            <button
              type="button"
              id="btn"
              onClick={handleOnSubmit}
              className="btn w-100 btn-primary"
            >
              Save
            </button>
            <Link
              to={"/dashboard"}
              type="button"
              className="btn btn-primary w-100"
            >
              Back
            </Link>
          </div>
        </div>
        {/* End of Buttons */}
      </form>
      {/* End of Form New */}
    </main>
  );
}

export default EditTable;
