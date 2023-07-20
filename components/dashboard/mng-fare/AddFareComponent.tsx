import ApiService from "@/services/ApiService";
import notify from "@/utils/toast";
import { ValidateObj } from "@/utils/validate";
import { Button, Input } from "@material-tailwind/react";
import { useRef } from "react";

export const AddFareComponent = () => {
  const cRef = useRef<any>(null);
  const tRef = useRef<any>(null);
  const pRef = useRef<any>(null);
  const aRef = useRef<any>(null);

  const handleSubmit = async () => {
    const fare = {
      company_name: cRef.current.value,
      type: tRef.current.value,
      price: pRef.current.value,
      area: aRef.current.value,
    };

    if (!ValidateObj(fare)) {
      notify.error("Please check your data!");
      return false;
    }

    try {
      const res = await ApiService.postData({
        url: "fare/create",
        data: fare,
      });
      notify.success("Successful!");
    } catch (error) {
      notify.error("Failed Server!");
    }
  };
  return (
    <div className="space-y-4">
      <div className="flex justify-end space-x-2">
        <Button onClick={handleSubmit}>Save</Button>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Input variant="static" label="Company Name" inputRef={cRef} />
        <Input variant="static" label="Type" inputRef={tRef} />
        <Input variant="static" label="Price($)" inputRef={pRef} />
        <Input variant="static" label="Area" inputRef={aRef} />
      </div>
    </div>
  );
};
