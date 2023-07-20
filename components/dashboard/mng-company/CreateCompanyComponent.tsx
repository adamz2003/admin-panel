import ApiService from "@/services/ApiService";
import notify from "@/utils/toast";
import { ValidateObj } from "@/utils/validate";
import { Button, Input } from "@material-tailwind/react";
import { useRef } from "react";

export const CreateCompanyCompany = () => {
  const nameRef = useRef<any>(null);
  const logoRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const phoneRef = useRef<any>(null);
  const ctrRef = useRef<any>(null);
  const cityRef = useRef<any>(null);
  const strRef = useRef<any>(null);

  const handleSubmit = async () => {
    const company = {
      name: nameRef.current.value,
      logo: "string",
      phone: "string",
      street: "string",
      city: "string",
      country: "string",
      email: "string",
    };

    if (!ValidateObj(company)) {
      notify.error("Please check your data!");
      return false;
    }

    try {
      const res = await ApiService.postData({
        url: "/company/create",
        data: company
      })
      notify.success("Successful!")
    } catch (error) {
      notify.error("Failed Server!")
    }
    return true
  };
  return (
    <div className="space-y-2">
      <div className="flex justify-end space-x-2">
        <Button onClick={handleSubmit}>Save</Button>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Input variant="static" label="Name" inputRef={nameRef} />
        <Input type={"file"} variant="static" label="Logo" inputRef={logoRef} />
        <Input variant="static" label="Email" inputRef={emailRef} />
        <Input variant="static" label="Phone Number" inputRef={phoneRef} />
        <Input variant="static" label="Country" inputRef={ctrRef} />
        <Input variant="static" label="City" inputRef={cityRef} />
        <Input variant="static" label="Street" inputRef={strRef} />
      </div>
    </div>
  );
};
