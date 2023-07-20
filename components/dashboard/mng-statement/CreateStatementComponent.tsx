import ApiService from "@/services/ApiService";
import { PriceType } from "@/utils/options";
import notify from "@/utils/toast";
import { ValidateObj } from "@/utils/validate";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { useRef, useState } from "react";

export const CreateStateComponent = () => {
  const idRef = useRef<any>(null);
  const accNumRef = useRef<any>(null);
  const descRef = useRef<any>(null);
  const tranAmountRef = useRef<any>(null);
  const [TransType, setTransType] = useState<any>(null);
  const handleSubmit = async () => {
    const statement = {
      sttId: String(idRef.current.value),
      accNum: String(accNumRef.current.value),
      descRef: String(descRef.current.value),
      transAmount: String(tranAmountRef.current.value),
      transType: Number(TransType),
    };

    if (!ValidateObj(statement)) {
      notify.error("Please check your data!");
      return false;
    }

    try {
        const res = await ApiService.postData({
          url: "statement/create",
          data: statement
        })
        notify.success("Successful!")
      } catch (error) {
        notify.error("Failed Server!")
      }
      return true
  };
  return (
    <div>
      <div className="flex justify-end space-x-2">
        <Button onClick={handleSubmit}>Save</Button>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <Input variant="static" label="StatementID" inputRef={idRef} />
        <Input variant="static" label="AccountNumber" inputRef={accNumRef} />
        <Input variant="static" label="Description" inputRef={descRef} />
        <Input variant="static" label="Transaction Amount" inputRef={tranAmountRef} />
        <Select
          variant="static"
          label="Transaction Type"
          onChange={(e: any) => setTransType(e)}
        >
          {PriceType.map((ele: any, idx: number) => (
            <Option value={ele.id} key={idx}>
              {ele.name}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};
