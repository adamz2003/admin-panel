import ApiService from "@/services/ApiService";
import { Card, Input, List, ListItem } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { ChipSkillComponent } from "./ChipSkillComponent";

export const InputSkillComponent = () => {
  const [InputValue, setInputValue] = useState<string>("");
  const [SkillsList, setSkillsList] = useState<any>([]);
  const [FilterSkillsList, setFilterSkillsList] = useState<any>([]);
  const [SelectedSkills, setSelectedSkills] = useState<any>([]);

  const getSkillsList = async () => {
    const res = await ApiService.getData({ url: "/skills/fetch" });
    setSkillsList(res);
  };

  useEffect(() => {
    getSkillsList();
  }, []);

  const onChangeHandler = (e: any) => {
    setInputValue(e.target.value)
    if (e.target.value) {
      const res = SkillsList.filter((ele: any) => {
        if (ele.name.toLowerCase().includes(e.target.value)) {
          return ele;
        }
      });
      setFilterSkillsList(res);
    } else {
      setFilterSkillsList([]);
    }
  };

  const addToFilterList = (ele: any) => {
    setSkillsList((prev: any) => {
      return prev.filter((item: any) => item.name !== item.name);
    });
    setSelectedSkills([...SelectedSkills, ele]);
    setInputValue("");
  };

  const popFromFilterList = (data: any) => {};

  return (
    <div className="space-y-4 relative">
      <Input
        variant="static"
        label="Skills"
        onKeyUp={(e: any) => onChangeHandler(e)}
      />
      {FilterSkillsList.length > 0 && (
        <Card className="absolute w-full z-20">
          <List>
            {FilterSkillsList.map((ele: any, idx: number) => (
              <ListItem key={idx} onClick={() => addToFilterList(ele)}>
                {ele.name}
              </ListItem>
            ))}
          </List>
        </Card>
      )}
      <ChipSkillComponent data={SelectedSkills} />
    </div>
  );
};
