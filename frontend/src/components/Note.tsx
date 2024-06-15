import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import moment from "moment/moment";
import { deleteNote } from "../services/notes";

export default function Note({ id, title, description, createdAt }) {
  async function deleteNote(id) {
    await deleteNote(id);
  }

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
          <Wrap>
            <WrapItem>
              <form action={deleteNote}>
                <Button type="submit" colorScheme="red">Удалить</Button>
              </form>
            </WrapItem>
            <WrapItem>
              <Button colorScheme="blue">Изменить</Button>
            </WrapItem>
          </Wrap>
        </div>
      </CardFooter>
    </Card>
  );
}
