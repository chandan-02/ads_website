import React, { useState } from "react";
import { Radio, Input, Select, Checkbox, Button, Dropdown, Menu, Space } from "antd";
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
        label: '1',
        key: '1',
      },
      {
        label: '2',
        key: '2',
      },
      {
        label: '3',
        key: '3',
      },
    ]}
  />
);

const Index = () => {
  const [radio, setRadio] = useState(1);
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState();
  const [tip, setTip] = useState();

  return (
    <div className="">
      <div className="flex justify-center gap-[12.438rem]">
        <div>
          <div>
            <div className="flex justify-between">
              <h1 className="text-[1.5rem] font-bold">Billing Info</h1>
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
              <NumericInput
                value={pincode}
                onChange={(e) => setPincode(e?.target?.value)}
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
          <div>
            <div className="flex justify-between">
              <h1 className="text-[1.5rem] font-bold">
                Additional informations
              </h1>
              <p>Step 2 of 3</p>
            </div>
            <p>Need something else? we will make it for you.</p>
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
            <div className="flex justify-between">
              <h1 className="text-[1.5rem] font-bold">Confirmation</h1>
              <p>Step 3 of 3</p>
            </div>
            <p>
              We are getting to the end. just few clicks and your order is
              ready!
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
        </div>
        <div className="border">
          <div>
            <h1>Order summary</h1>
            <p>
              Price can change depending on shipping method and taxes of your
              state.
            </p>
          </div>
          <hr />
          <div>
            <img src="#" />
            <div>
              <h1>Tomahawk</h1>
            </div>
            <div>loremisiudaidbiuwabdiuabdinawd</div>
            <div>
              <h1>13900</h1>
              <div>
                <Dropdown overlay={menu}>
                  <Button>
                    <Space>
                      Qty
                    </Space>
                  </Button>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>All your data is safe</h1>
      <style>{`
        .ant-checkbox-wrapper {
          border-radius: 5px;
          padding: 5px 10px;
        }
      `}</style>
    </div>
  );
};

export default Index;
