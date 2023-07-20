import notify from "@/utils/toast";
import { Button, Input } from "@material-tailwind/react";
import { useRef } from "react";

export const DocumentListComponent = () => {
  const policyRef = useRef<any>(null);
  const helpRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const handlePSubmit = () => {
    const policyDoc = policyRef.current.value;

    policyDoc && notify.success("Successful!");
    !policyDoc && notify.error("Failed Server!");
  };
  const handleHSubmit = () => {
    const helpDoc = helpRef.current.value;
    
    helpDoc && notify.success("Successful!");
    !helpDoc && notify.error("Failed Server!");
  };
  const handleASubmit = () => {
    const aboutDoc = aboutRef.current.value;

    aboutDoc && notify.success("Successful!");
    !aboutDoc && notify.error("Failed Server!");
  };
  return (
    <div>
      <div className="grid gap-8">
        <div className="flex flex-row space-x-2">
          <Input
            type={"file"}
            variant="static"
            label="Policy"
            inputRef={policyRef}
          />
          <Button onClick={handlePSubmit}>Save</Button>
        </div>
        <div className="flex flex-row space-x-2">
          <Input
            type={"file"}
            variant="static"
            label="About Us"
            inputRef={helpRef}
          />
          <Button onClick={handleASubmit}>Save</Button>
        </div>
        <div className="flex flex-row space-x-2">
          <Input
            type={"file"}
            variant="static"
            label="Help"
            inputRef={aboutRef}
          />
          <Button onClick={handleHSubmit}>Save</Button>
        </div>
      </div>
    </div>
  );
};
