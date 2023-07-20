import ApiService from "@/services/ApiService";
import notify from "@/utils/toast";
import { ValidateObj } from "@/utils/validate";
import { Button, Input } from "@material-tailwind/react";
import { useRef } from "react";

export const AddMapComponent = () => {
  const mapIdRef = useRef<any>(null);
  const nameRef = useRef<any>(null);
  const descRef = useRef<any>(null);
  const lttRef = useRef<any>(null);
  const lgtRef = useRef<any>(null);

  const handleSubmit = async () => {
    const mapInfo = {
      mapId: mapIdRef.current.value,
      name: nameRef.current.value,
      description: descRef.current.value,
      latitude: lttRef.current.value,
      longitude: lgtRef.current.value,
    };

    if (!ValidateObj(mapInfo)) {
      notify.error("Please check your data!");
      return false;
    }

    try {
      const res = await ApiService.postData({
        url: "map/create",
        data: mapInfo,
      });
      notify.success("Successful!");
    } catch (error) {
      notify.error("Failed Server!");
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-end space-x-2">
        <Button onClick={handleSubmit}>Save</Button>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Input variant="static" label="MapId" inputRef={mapIdRef} />
        <Input variant="static" label="Name" inputRef={nameRef} />
        <Input variant="static" label="Description" inputRef={descRef} />
        <Input variant="static" label="Latitude" inputRef={lttRef} />
        <Input variant="static" label="Longitude" inputRef={lgtRef} />
      </div>
    </div>
  );
};
