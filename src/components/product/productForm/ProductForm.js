import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./ProductForm.scss";

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          
          <label>Full Name:</label>
          <input required
            type="text"
            placeholder="Name"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />

          <label>PPA Name</label>
          <input required
            type="text"
            placeholder="PPA"
            name="category"
            value={product?.category}
            onChange={handleInputChange}
          />

          <label>Amount</label>
          <input required
            type="text"
            placeholder="50,000 min"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>Months</label>
          <input required
            type="text"
            placeholder="3 months min"
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
          />

          <label>Loan Reason:</label>
          <ReactQuill required
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Send Request
            </button>
          </div>
        </form>
        <p>Proceed to pay ₦ 1,500 Application fee</p>
      </Card>
      <p className="kolor --mt"> You will be contacted for confirmation of request and documentation after completion of loan application</p>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;
