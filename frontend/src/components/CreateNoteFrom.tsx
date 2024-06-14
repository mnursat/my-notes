import { Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus, FaNoteSticky } from "react-icons/fa6";

export default function CreateNoteForm({ onCreate }) {
  const [note, setNote] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setNote(null);
    onCreate(note);
  };

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <FaNoteSticky className="size-5"/>
        <h3 className="font-bold text-xl"> Создать заметку</h3>
      </div>
      <Input
        placeholder="Название заметки"
        value={note?.title ?? ""}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <Textarea
        placeholder="Описание"
        resize={"none"}
        height={"300"}
        value={note?.description ?? ""}
        onChange={(e) => setNote({ ...note, description: e.target.value })}
      />
      <Button
        leftIcon={<FaPlus />}
        type="submit"
        colorScheme="teal"
        variant="outline"
      >
        Создать
      </Button>
    </form>
  );
}
