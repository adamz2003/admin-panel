import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import ApiService from "@/services/ApiService";
import notify from "@/utils/toast";

interface Option {
  readonly label: string;
  readonly value: string;
}

export const CatSkillsCategoryComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<Option | null>();
  const [Skills, setSkills] = useState<any>([]);

  const getSkills = async () => {
    const res = await ApiService.getData({ url: "/skills/fetch" });
    setSkills(res);
  };

  const createSkill = async (value: any) => {
    try {
      const res = await ApiService.postData({
        url: "skills/create",
        data: {
          name: value,
        },
      });
      notify.success("Successful!")
    } catch (error) {
      notify.error("Failed Server!")
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    createSkill(inputValue);
    getSkills();
    setValue(null);
    setIsLoading(false);
  };

  return (
    <Card variant="gradient" className=" bg-blue-50">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center "
      >
        <Typography variant="h3" color="white">
          Skills
        </Typography>
      </CardHeader>
      <CardBody className="grid gap-8">
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
          placeholder="Add a New Skill"
        />
      </CardBody>
    </Card>
  );
};
