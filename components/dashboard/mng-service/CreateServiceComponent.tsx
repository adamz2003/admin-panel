import ApiService from "@/services/ApiService";
import notify from "@/utils/toast";
import { ValidateObj } from "@/utils/validate";
import { Button, Input } from "@material-tailwind/react";
import { useRef } from "react";

export const CreateServiceComponent = () => {
  const idRef = useRef<any>(null);
  const nameRef = useRef<any>(null);
  const descRef = useRef<any>(null);
  const cateRef = useRef<any>(null);
  const priceRef = useRef<any>(null);
  const durRef = useRef<any>(null);

  const handleSubmit = async () => {
    const service = {
        serviceId: idRef.current.value,
        name: nameRef.current.value,
        description: descRef.current.value,
        category: cateRef.current.value,
        price: priceRef.current.value,
        duration: durRef.current.value
    };

    if (!ValidateObj(service)) {
      notify.error("Please check your data!");
      return false;
    }

    try {
        const res = await ApiService.postData({
            url: 'service/create',
            data: service
        })
        notify.success("Successful!")
    } catch (error) {
        notify.error("Failed Server!")
    }
  };
  return (
    <div className="space-y-2">
      <div className="flex justify-end">
        <Button onClick={handleSubmit}>Save</Button>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Input variant="static" label="ID" inputRef={idRef} />
        <Input variant="static" label="Name" inputRef={nameRef} />
        <Input variant="static" label="Description" inputRef={descRef} />
        <Input variant="static" label="Category" inputRef={cateRef} />
        <Input variant="static" label="Price" inputRef={priceRef} />
        <Input variant="static" label="Duration" inputRef={durRef} />
      </div>
    </div>
  );
};
