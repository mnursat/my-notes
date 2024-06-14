import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import moment from "moment/moment";

export default function Note({ title, description, createdAt }) {
  return (
    <Card variant={"filled"}>
      <CardHeader>
        <Heading size={"md"}>{title}</Heading>
      </CardHeader>
      <Divider borderColor={"gray"} />
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <Divider borderColor={"gray"} />
      <CardFooter className="flex flex-col gap-2">
        <div className="flex justify-between	">
          <div className="flex flex-col">
            Дата: {moment(createdAt).format("DD.MM.YYYY")}
            <p className="text-xs">
              Время: {moment(createdAt).format("HH:mm")}
            </p>
          </div>
          <div className="flex gap-3">
              <button>Удалить</button>
              <button>Изменить</button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
