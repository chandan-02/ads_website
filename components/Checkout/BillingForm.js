import React, { useState } from "react";
import { Radio, Input, Select, Checkbox, Button, Menu } from "antd";

const { TextArea } = Input;
const { Option } = Select;

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

const BillingForm = () => {
    const [radio, setRadio] = useState(1);
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState();
    const [tip, setTip] = useState();
    
  return (
    <div>
      <div>
        <div className="flex justify-between items-baseline">
          <h1 className="text-[1.2rem] md:text-[1.5rem] font-bold">
            Billing Info
          </h1>
          <p>Step 1 of 3</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[2rem]">
        <Radio.Group
          onChange={(e) => setRadio(e?.target?.value)}
          value={radio}
          className="col-span-2 font-bold text-xl"
        >
          <Radio value={1}>New Address</Radio>
          <Radio value={2}>Existing Address</Radio>
        </Radio.Group>
        <div>
          <span>First Name</span>
          <Input />
        </div>
        <div>
          <span>Last Name</span>
          <Input />
        </div>
        <div>
          <span>Mobile</span>
          <Input />
        </div>
        <div>
          <span>Email</span>
          <Input />
        </div>
        <div className="col-span-2">
          <span>Address</span>
          <TextArea
            value={address}
            onChange={(e) => setAddress(e?.target?.value)}
            placeholder="Apt, Block, Street, Locality"
            autoSize={{
              minRows: 3,
              maxRows: 5,
            }}
          />
        </div>
        <div>
          <span>Pincode</span>
          <Input
            maxLength={6}
          />
        </div>
        <div className="flex flex-col">
          <span>City</span>
          <Select>
            <Option value="Zhejiang">Mumbai</Option>
            <Option value="Jiangsu">Nashik</Option>
          </Select>
        </div>
        <div className="flex flex-col">
          <span>State</span>
          <Select>
            <Option value="Zhejiang">Maharashtra</Option>
            <Option value="Jiangsu">Banglore</Option>
          </Select>
        </div>
      </div>
      <div className="my-[3.9rem]">
        <div className="flex justify-between items-baseline">
          <h1 className="text-[1.2rem] md:text-[1.5rem] font-bold">
            Additional informations
          </h1>
          <p>Step 2 of 3</p>
        </div>
        <p className="text-[#ACACAC]">
          Need something else? we will make it for you.
        </p>
        <div className="">
          <span>Order Notes</span>
          <TextArea
            value={tip}
            onChange={(e) => setTip(e?.target?.value)}
            placeholder="if my door is closed leave everything with the neighbors. :)"
            autoSize={{
              minRows: 3,
              maxRows: 5,
            }}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-baseline">
          <h1 className="text-[1.2rem] md:text-[1.5rem] font-bold">
            Confirmation
          </h1>
          <p>Step 3 of 3</p>
        </div>
        <p className="text-[#ACACAC]">
          We are getting to the end. just few clicks and your order is ready!
        </p>
        <div className="flex flex-col">
          <Checkbox className="border cart-checkbox">
            I agree with sending an Marketing and newsletter emails.
          </Checkbox>
          <br />
          <Checkbox className="border cart-checkbox">
            I agree with our{" "}
            <u className="text-[#EE2841]">terms and conditions</u> and{" "}
            <u className="text-[#EE2841]">privacy policy</u>.
          </Checkbox>
        </div>
      </div>
      <Button size="large" className="my-[2rem]" type="primary">
        Complete Order
      </Button>
    </div>
  );
};

export default BillingForm;
