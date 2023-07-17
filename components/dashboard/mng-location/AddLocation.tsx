import { Button, Input, Switch } from "@material-tailwind/react";

export const AddLocationForm = () => {
  return (
    <div className="grid gap-8">
      <div className="grid grid-cols-2 gap-8">
        <Input variant="static" label="Country" />
        <Input variant="static" label="City" />
      </div>
      <Input variant="static" label="Street" />
      <Switch label="Status" id="addLocationFormStt" />
      <div className="flex justify-end">
        <Button>Add</Button>
      </div>
    </div>
  );
};
