import { InputSkillComponent } from "@/components/includes/InputSkillComponents";
import ApiService from "@/services/ApiService";
import { JobLevel, JobType, PriceType } from "@/utils/options";
import notify from "@/utils/toast";
import { ValidateObj } from "@/utils/validate";
import {
  Button,
  Card,
  CardBody,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";

export const PostRequestsForm = () => {
  const titleRef = useRef<any>(null);
  const descRef = useRef<any>(null);
  const priceRef = useRef<any>(null);
  const [JogCategoryList, setJogCategoryList] = useState<any>([]);
  const [JobSubCategoryList, setJobSubCategoryList] = useState<any>([]);
  const [SelJobCate, setSelJobCate] = useState<any>(null);
  const [SelSubCate, setSelSubCate] = useState<any>(null);
  const [SelJobType, setSelJobType] = useState<any>(null);
  const [SelJobLevel, setSelJobLevel] = useState<any>(null);
  const [SelPayMethod, setSelPayMethod] = useState<any>(null);
  const [SetDesc, setSetDesc] = useState("");

  const getJobCategory = async () => {
    const res = await ApiService.getData({ url: "/categories/fetch" });
    setJogCategoryList(res.data);
  };

  const getSubCategory = (e:any) => {
    const id = e;
    setSelJobCate(e)
    const res = JogCategoryList.filter((ele:any) => {
      if (ele.id === id) {
        return ele
      }
    })
    setJobSubCategoryList(res[0].subCategories)
  }

  useEffect(() => {
    getJobCategory();
  }, []);

  const handlerSubmit = () => {
    const title = titleRef.current.value;
    const desc = SetDesc;
    console.log(desc)
    const price = priceRef.current.value;
    const files = [""];

    const JobReq = {
      title: title,
      description: desc,
      category: SelJobCate,
      subCategories: SelSubCate,
      jobType: SelJobType,
      jobLevel: SelJobLevel,
      // paymentMth: m
      expectedDeliveryTime: "sdfsdf",
      price: price,
      // files: files,
      user: "admin",
      // skill: []
    }

    console.log(JobReq)

    const flg = ValidateObj(JobReq)

    console.log(flg)

    if(!flg){
      notify.error("Please check the options!")
      return
    }
    // TODO
    
    notify.success("Successful!");
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={handlerSubmit}>Post a Request</Button>
      </div>
      <div className="grid gap-8">
        <Input variant="static" label="Job Title" inputRef={titleRef} />
        <Textarea variant="static" label="Description" resize={true} onChange={(e: any) => setSetDesc(e.target.value)} />
        <div className="grid lg:grid-cols-2 gap-8">
          <Select variant="static" label="Category" onChange={(e:any) => getSubCategory(e)}>
            {JogCategoryList.map((ele: any, idx: number) => (
              <Option value={ele.id} key={idx}>{ele.name}</Option>
            ))}
          </Select>
          <Select variant="static" label="SubCategory" onChange={(e: any) => setSelSubCate(e)}>
            {/* <Option>SubCategory</Option> */}
            {JobSubCategoryList.map((ele: any, idx: number) => (
              <Option value={ele.id} key={idx}>{ele.name}</Option>
            ))}
          </Select>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <Select variant="static" label="JobType" onChange={(e: any) => setSelJobType(e)}>
            {JobType.map((ele: any, idx: number) => (
              <Option value={ele.id} key={idx}>{ele.name}</Option>
            ))}
          </Select>
          <Select variant="static" label="JobLevel" onChange={(e:any) => setSelJobLevel(e)}>
            {JobLevel.map((ele: any, idx: number) => (
              <Option value={ele.id} key={idx}>{ele.name}</Option>
            ))}
          </Select>
          <Input variant="static" label="Time" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Input variant="static" label="Price" inputRef={priceRef} />
          <Select variant="static" label="Payment Method" onChange={(e:any) => setSelPayMethod(e)}>
            {PriceType.map((ele: any, idx: number) => (
              <Option value={ele.id} key={idx}>{ele.name}</Option>
            ))}
          </Select>
        </div>
        {/* <Select variant="static" label="Skills">
          <Option>Skills</Option>
        </Select> */}
        <InputSkillComponent />
        <Card className="border-2 p-4 border-blue-500">
          <CardBody className="flex items-center justify-center">
            <Typography> Drag And Upload Your Files Here </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
