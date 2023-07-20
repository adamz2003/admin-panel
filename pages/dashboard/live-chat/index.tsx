import { MsgInputFormComponent } from "@/components/livechat/MsgInputFormComponent";
import { UserListSidebar } from "@/components/livechat/UserListSidebar";
import { Card, CardBody, IconButton, Input } from "@material-tailwind/react";
import { FaLocationArrow } from "react-icons/fa";

const LiveChat = () => {
  return (
    <div className="flex flex-row">
      <UserListSidebar />
      <div className="bg-blue-50 w-full min-h-screen relative">
        <div className="absolute top-0 right-0 w-full">
          <Card className="m-0 p-0 rounded-none">
            <CardBody className="m-0 py-2 flex flex-row">
              
            </CardBody>
          </Card>
        </div>
        <div className="absolute bottom-0 right-0 w-full">
          <Card className="m-0 p-0 rounded-none">
            <CardBody className="m-0 py-2 flex flex-row">
              <Input variant="static" className="w-full"></Input>
              <IconButton>
                <FaLocationArrow />
              </IconButton>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
