import * as React from "react";
import InputElement from "./basic-inputfield";

class BillingInfo extends React.Component {
  _populateBillingAddress() {
    let billingAddress = this.props.billingAddress;
    var list = [];
    for (var el in billingAddress) {
      if (el === "order_date") {
        list.push(
            <>
                <div className="labelBox">Order Date</div>
                <InputElement
                className="inputBoxDisable"
                autoComplete="on"
                type="date"
                value={billingAddress[el]}
                disabled={true}
            />
          </>
        );
      } else {
        list.push(
          <InputElement
            className="inputBoxDisable"
            autoComplete="on"
            type="text"
            placeholder="Enter Keyword"
            value={billingAddress[el]}
            disabled={true}
          />
        );
      }
    }
    return list;
  }
  _populateShippingAddress() {
    var ShippingAddress = this.props.ShippingAddress;
    var list = [];
    for (var el in ShippingAddress) {
      if (el === "order_date") {
        list.push(
            <>
                <div  className="labelBox">Expected Date</div>
                <InputElement
                className="inputBoxDisable"
                autoComplete="on"
                type="date"
                value={ShippingAddress[el]}
                disabled={true}
                />
            </>
        );
      } else {
        list.push(
          <InputElement
            autoComplete="on"
            type="text"
            className="inputBoxDisable"
            placeholder="Enter Keyword"
            value={ShippingAddress[el]}
            disabled={true}
          />
        );
      }
    }
    return list;
  }
  render() {
    return (
      <section className="address_info">
        <div className="billingAddress">
          <div className="labelBox">Billing Address</div>
          {this._populateBillingAddress()}
        </div>
        <div className="shippingAddress">
          <div className="labelBox">Shipping Address</div>
          {this._populateShippingAddress()}
        </div>
        <div className="clearall" />
      </section>
    );
  }
}
export default BillingInfo;
