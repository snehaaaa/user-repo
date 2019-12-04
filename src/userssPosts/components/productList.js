import React from "react";
import InputElement from "./basic-inputfield";

const ProductsList = ({
  products,
  onRemoveProduct,
  handleCommonFieldChange,
  errorText
}) => (
  <>
    <div className="header_Section">
      <div className="productId fleft header">Product ID</div>
      <div className="productName fleft header">Product Name</div>
      <div className="productQty fleft header">QTY</div>
      <div className="productUnitPrice fleft header">Unit Price</div>
      <div className="productTotalPrice fleft header">Total Price</div>
      <div className="productMessage fleft header">Notes</div>
      <div className="clearall" />
      <div className="border_seperator_main" />
    </div>
    {products.map((productData, index) => (
 <React.Fragment key={productData.id}>
        <div className="productId fleft">
          <div className="Mobile_header">Product ID</div>
          <div style={{ display: "flex" }}>
            <InputElement
              autoComplete="on"
              type="text"
              className="inputBoxDisable"
              placeholder="Enter Id"
              value={productData.id}
              disabled={true}
              onChange={(e, value) =>
                handleCommonFieldChange(index, value, "id")
              }
            />
            <div className="arrow_left_right">&#8596;</div>
          </div>
        </div>
        <div className="productName fleft">
          <div className="Mobile_header">Product Name</div>
          <InputElement
            autoComplete="on"
            type="text"
            className="inputBoxProduct"
            placeholder="Enter Product Name"
            value={productData.product_name}
            onChange={(e, value) =>
              handleCommonFieldChange(index, value, "product_name")
            }
          />
        </div>
        <div className="productQty fleft">
          <div className="Mobile_header">Qty</div>
          <InputElement
            autoComplete="on"
            type="text"
            className="inputBox"
            placeholder="Enter Quantity"
            value={productData.Qty}
            onChange={(e, value) =>
              handleCommonFieldChange(index, value, "Qty")
            }
          />
        </div>
        <div className="productUnitPrice fleft">
          <div className="Mobile_header">Unit Price</div>
          <InputElement
            autoComplete="on"
            type="text"
            className="inputBox"
            placeholder="Enter Unit Price"
            value={productData.unit_price}
            onChange={(e, value) =>
              handleCommonFieldChange(index, value, "unit_price")
            }
          />
        </div>
        <div className="productTotalPrice fleft">
          <div className="Mobile_header">Total Price</div>
          <InputElement
            autoComplete="on"
            type="text"
            className="inputBoxDisable"
            disabled={true}
            placeholder="Enter Total Price"
            value={productData.Qty * productData.unit_price}
            onChange={(e, value) =>
              handleCommonFieldChange(index, value, "totalPrice")
            }
          />
        </div>
        <div className="productMessage fleft">
          <div className="Mobile_header">Notes</div>
          <textarea
            placeholder="Notes..."
            name="message"
            value={productData.message}
            onChange={(e, value) =>
              handleCommonFieldChange(index, e.target.value, "message")
            }
          >
            
          </textarea>
        </div>
        <div className="productDeleteButton fleft">
          <button
            className="delete_row"
            onClick={() => onRemoveProduct(productData.id)}
          >
            DELETE
          </button>
        </div>
        <div className="clearall" />
      </React.Fragment>
    ))}
  </>
);

export default ProductsList;
