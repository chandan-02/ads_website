import React, { useState } from "react";
import { TextInput, Loader, Burger } from "@mantine/core";
import Drawers from "../Layout/Drawer";
import { UilSearch } from "@iconscout/react-unicons";

function Navbar() {
  const [opened, setOpened] = useState(false);
  return (
    <div className="flex flex-col justify-between py-4 px-14">
      <Drawers opened={opened} setOpened={setOpened} />
      <div className="flex justify-between items-center">
        <img className="w-14" src="../assets/logo.webp" />
        <TextInput
          className="md:w-552 sm:w-96"
          // styles={{ input: { width: "15rem" } }}
          placeholder="Search Product ..."
          rightSection={<UilSearch size="18" color="#6F6F6F" />}
        />
        <h1>icon</h1>
      </div>
      <div className="flex items-center gap-40">
        <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
        <div className="flex gap-3 justify-center">
          <h2>Trending</h2>
          <h2>Categories</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
