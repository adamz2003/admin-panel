import ApiService from "@/services/ApiService";
import notify from "@/utils/toast";
import { ValidateObj } from "@/utils/validate";
import { Button, Input } from "@material-tailwind/react";
import { useRef } from "react";

export const CreateStoreComponent = () => {
  const nameRef = useRef<any>(null);
  const phoneRef = useRef<any>(null);
  const ctrRef = useRef<any>(null);
  const cityRef = useRef<any>(null);
  const strRef = useRef<any>(null);
  const emailRef = useRef<any>(null);

  const handleSubmit = async () => {
    const store = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      country: ctrRef.current.value,
      city: cityRef.current.value,
      street: strRef.current.value,
      email: emailRef.current.value,
    };

    if (!ValidateObj(store)) {
      notify.error("Please check your data!");
      return false;
    }

    try {
      const res = await ApiService.postData({
        url: "store/create",
        data: store,
      });
      notify.success("Successful!");
    } catch (error) {
      notify.error("Failed Server!");
    }
    return true;
  };
  return (
    <div className="space-y-8">
      <div className="flex justify-end space-x-2">
        <Button onClick={handleSubmit}>Save</Button>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Input variant="static" label="Name" inputRef={nameRef} />
        <Input variant="static" label="Phone" inputRef={phoneRef} />
        <Input variant="static" label="Country" inputRef={ctrRef} />
        <Input variant="static" label="City" inputRef={cityRef} />
        <Input variant="static" label="Street" inputRef={strRef} />
        <Input variant="static" label="Email" inputRef={emailRef} />
      </div>
    </div>
  );
};
