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
import Select from "react-select";

interface Option {
  readonly label: string;
  readonly value: string;
}

export const CatSubJobsCategoryComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<Option | null>();
  const [Skills, setSkills] = useState<any>([]);
  const [JobCate, setJobCate] = useState<any>([]);
  const [SelJobCate, setSelJobCate] = useState<any>([]);

  const getSkills = async (item:any) => {
    console.log(item.value)
    setSelJobCate(item.value)
    JobCate.filter((ele:any) => {
      if(Number(item.value) === Number(ele.id)){
        setSkills(ele.subCategories)
        console.log(ele.subCategories)
      }
    })
  };

  const getJobCate = async () => {
    const res = await ApiService.getData({ url: "/categories/fetch" });
    setJobCate(res.data);
  };

  const createSkill = async (value: any) => {
    try {
      const res = await ApiService.postData({
        url: "sub-categories/create",
        data: {
          name: value,
          categoryId: Number(SelJobCate)
        },
      });
      notify.success("Successful!");
    } catch (error) {
      notify.error("Failed Server!");
    }
  };

  useEffect(() => {
    getJobCate();
    // getSkills();
  }, []);

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    createSkill(inputValue);
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
          Job SubCategory
        </Typography>
      </CardHeader>
      <CardBody className="grid lg:grid-cols-2 gap-8">
        <Select 
          onChange={(newValue: any) => getSkills(newValue)}
          options={JobCate.map((ele: any) => {
            return {
              label: ele.name,
              value: ele.id,
            };
          })}
        />
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
          placeholder="Add a New Job SubCategory"
        />
      </CardBody>
    </Card>
  );
};
