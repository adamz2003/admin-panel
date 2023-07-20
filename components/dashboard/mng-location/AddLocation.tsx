import ApiService from "@/services/ApiService";
import notify from "@/utils/toast";
import { ValidateObj } from "@/utils/validate";
import { Button, Input, Switch } from "@material-tailwind/react";
import { useRef, useState } from "react";

export const AddLocationForm = () => {
  const countryRef = useRef<any>(null);
  const cityRef = useRef<any>(null);
  const streetRef = useRef<any>(null);
  const [ChkStt, setChkStt] = useState<any>(null);

  const handleSubmit = async () => {
    const location = {
      country: countryRef.current.value,
      city: cityRef.current.value,
      street: streetRef.current.value,
    };

    if (!ValidateObj(location)) {
      notify.error("Please check your data!");
      return false;
    }

    // TODO
    try {
      const res = await ApiService.postData({
        url: "/location/create",
        data: location
      })
      notify.success("Successful!")
    } catch (error) {
      notify.error("Failed Server!")
    }
    return true
  };

  return (
    <div className="grid gap-8">
      <div className="grid grid-cols-2 gap-8">
        <Input variant="static" label="Country" inputRef={countryRef} />
        <Input variant="static" label="City" inputRef={cityRef} />
      </div>
      <Input variant="static" label="Street" inputRef={streetRef} />
      {/* <Switch label="Status" id="addLocationFormStt" onChange={(e) => setChkStt(e)} /> */}
      <div className="flex justify-end">
        <Button onClick={handleSubmit}>Add</Button>
      </div>
    </div>
  );
};
