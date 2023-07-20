import { LayoutComponent } from "@/components/includes/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
const colorOption = [
  { value: "Yellow", label: "Yellow" },
  { value: "Black", label: "Black" },
  { value: "Green", label: "Green" },
  { value: "Red", label: "Yellow" },
  { value: "Cyan", label: "Black" },
  { value: "Brown", label: "Green" },
  { value: "Blue", label: "Green" },
];

const animatedComponents = makeAnimated();

const SkillInput: NextPageWithLayout = () => {
  const SkillInput = (e: any) => {
    console.log(e);
  };
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      onChange={(e) => {
        SkillInput(e);
      }}
      options={colorOption}
    />
  );
};

SkillInput.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default SkillInput;
