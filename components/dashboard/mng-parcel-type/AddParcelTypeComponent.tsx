import ApiService from "@/services/ApiService";
import notify from "@/utils/toast";
import { ValidateObj } from "@/utils/validate";
import { Button, Input } from "@material-tailwind/react";
import { useRef } from "react";

export const AddParcelTypeComponent = () => {
  const parcelIdRef = useRef<any>(null);
  const nameRef = useRef<any>(null);
  const descRef = useRef<any>(null);
  const maxRef = useRef<any>(null);

  const handleSubmit = async () => {
    const parcelType = {
      typeId: parcelIdRef.current.value,
      name: nameRef.current.value,
      description: descRef.current.value,
      max_weight: maxRef.current.value,
    };

    if (!ValidateObj(parcelType)) {
      notify.error("Please check your data!");
      return false;
    }

    try {
      const res = await ApiService.postData({
        url: "parcel-type/create",
        data: parcelType,
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
        <Input variant="static" label="ID" inputRef={parcelIdRef} />
        <Input variant="static" label="Name" inputRef={nameRef} />
        <Input variant="static" label="Description" inputRef={descRef} />
        <Input variant="static" label="Max Weight" inputRef={maxRef} />
      </div>
    </div>
  );
};
