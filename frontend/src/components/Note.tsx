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
        Дата: {moment(createdAt).format("DD/MM/YYYY")}
        <small className="text-xs">
          Время {moment(createdAt).format("HH:mm:ss")}
        </small>
      </CardFooter>
    </Card>
  );
}
