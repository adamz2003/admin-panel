import ApiService from "@/services/ApiService";
import notify from "@/utils/toast";
import { ValidateObj } from "@/utils/validate";
import { Button, Input } from "@material-tailwind/react";
import { useRef } from "react";

export const CreateProviderComponent = () => {
  const frtNameRef = useRef<any>(null);
  const lstNameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const cateRef = useRef<any>(null);
  const countryRef = useRef<any>(null);
  const cityRef = useRef<any>(null);
  const strRef = useRef<any>(null);
  const phoneRef = useRef<any>(null)

  const handleSubmit = async () => {
    const provider = {
      fistName: frtNameRef.current.value,
      lastName: lstNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      category: cateRef.current.value,
      country: countryRef.current.value,
      city: cityRef.current.value,
      street: cityRef.current.value,
    };

    if (!ValidateObj(provider)) {
      notify.error("Please check your data!");
      return false;
    }

    try {
      const res = await ApiService.postData({
        url: "provider/create",
        data: provider,
      });
      notify.success("Successful!")
    } catch (error) {
      console.log(error)
      notify.error("Failed Server!")
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end space-x-2">
        <Button onClick={handleSubmit}>Save</Button>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Input variant="static" label="First Name" inputRef={frtNameRef} />
        <Input variant="static" label="Last Name" inputRef={lstNameRef} />
        <Input variant="static" label="Email" inputRef={emailRef} />
        <Input variant="static" label="Phone" inputRef={phoneRef} />
        <Input variant="static" label="Category" inputRef={cateRef} />
        <Input variant="static" label="Country" inputRef={countryRef} />
        <Input variant="static" label="City" inputRef={cityRef} />
        <Input variant="static" label="Street" inputRef={strRef} />
      </div>
    </div>
  );
};
