import { LayoutComponent } from "@/components/includes/layout";
import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";
import CreatableSelect from "react-select/creatable";
import ApiService from "@/services/ApiService";

interface Option {
  readonly label: string;
  readonly value: string;
}

const MyComponent: NextPageWithLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<Option | null>();
  const [Skills, setSkills] = useState<any>([]);

  const getSkills = async () => {
    const res = await ApiService.getData({ url: "/skills/fetch" });
    setSkills(res);
  };

  const createSkill = async (value: any) => {
    const res = await ApiService.postData({ url: "skills/create", data: {
      name: value
    } });
  };

  useEffect(() => {
    getSkills();
  }, []);

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    createSkill(inputValue)
    getSkills();
    setValue(null);
    setIsLoading(false);
  };

  return (
    <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue) => setValue(newValue)}
      onCreateOption={handleCreate}
      options={Skills.map((ele: any) => {
        return {
          label: ele.name,
          value: ele.id,
        };
      })}
      value={value}
    />
  );
};

MyComponent.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default MyComponent;
