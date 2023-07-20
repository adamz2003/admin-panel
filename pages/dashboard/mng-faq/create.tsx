import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import ApiService from "@/services/ApiService";
import notify from "@/utils/toast";
import { ValidateObj } from "@/utils/validate";
import { Button, Input, Option, Select, Textarea } from "@material-tailwind/react";
import { ReactElement, useRef, useState } from "react";

const FaqCreate: NextPageWithLayout = () => {
  const titleRef = useRef<any>(null)
  const [FaqType, setFaqType] = useState<any>("");
  const [Answer, setAnswer] = useState<any>("");

  const handleSubmit = async () => {
    const faq = {
      question: Answer,
      title: titleRef.current.value,
      category: FaqType
    }

    console.log(faq)

    if(!ValidateObj(faq)){
      notify.error("Please check your data!");
      return false;
    }

    // TODO
    try {
      const res = await ApiService.postData({
        url: "faq/create",
        data: faq
      })
      notify.success("Successful!")
    } catch (error) {
      notify.error("Failed server!")
    }
  }

  return (
    <div>
        <div className="flex justify-end">
            <Button onClick={handleSubmit}>Create</Button>
        </div>
      <div className="grid gap-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <Input variant="static" label="Title" className="lg:col-span-2" inputRef={titleRef} />
          <Select variant="static" label="Type" onChange={(e:any)=>setFaqType(e)}>
            <Option value="1">General</Option>
            <Option value="2">Freelancer</Option>
            <Option value="3">Customer</Option>
            <Option value="4">Dispute</Option>
          </Select>
        </div>
        <Textarea variant="static" onChange={(e) => setAnswer(e.target.value)} />
      </div>
    </div>
  );
};

FaqCreate.getLayout = (page: ReactElement) => {
  return <LayoutComponent>{page}</LayoutComponent>;
};

export default FaqCreate;
