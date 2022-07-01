import React, { useState } from "react";
import {
  Input,
  Select,
  Menu,
} from "antd";
import BillingForm from "../../components/Checkout/BillingForm";
import OrderSummary from "../../components/Checkout/OrderSummary";

const { TextArea } = Input;
const { Option } = Select;

const formatNumber = (value) => new Intl.NumberFormat().format(value);

const NumericInput = (props) => {
  const { value, onChange } = props;

  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;

    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(inputValue);
    }
  }; // '.' at the end or only '-' in the input box.

  const handleBlur = () => {
    let valueTemp = value;

    if (value?.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }

    onChange(valueTemp?.replace(/0*(\d+)/, "$1"));
  };

  return (
    <Input
      {...props}
      onChange={handleChange}
      onBlur={handleBlur}
      maxLength={6}
    />
  );
};

const menu = (
  <Menu
    // onClick={handleMenuClick}
    items={[
      {
        label: "1",
        key: "1",
      },
      {
        label: "2",
        key: "2",
      },
      {
        label: "3",
        key: "3",
      },
    ]}
  />
);

const Index = () => {
  const [radio, setRadio] = useState(1);
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState();
  const [tip, setTip] = useState();
  const [click, setClick] = useState(1);

  return (
    <div className="py-[2rem] md:py-[4rem] md:mx-[4rem] mx-[2rem]">
      <div className="flex flex-col-reverse lg:flex-row justify-center gap-[12.438rem] mb-[6.25rem]">
        <BillingForm/>
        <OrderSummary/>
      </div>
      <div className="flex justify-center items-center gap-[0.75rem] text-center">
        <img src="../assets/ic-security-safety.svg" alt="Secured" />
        <h1 className="m-0">All your data is safe</h1>
      </div>
      <style>{`
        .ant-checkbox-wrapper {
          border-radius: 5px;
          padding: 5px 10px;
        }
        .ant-btn {
          border-radius: 5px;
          font-size: 0.9rem;
          padding: 0 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default Index;
