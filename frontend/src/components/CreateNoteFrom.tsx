import { Button, Input, Textarea } from "@chakra-ui/react";

export default function CreateNoteForm() {
    return (
    <form className='w-full flex flex-col gap-3'>
        <h3 className='font-bold text-xl'>Создать заметку</h3>
        <Input placeholder='Название заметки'/>
        <Textarea placeholder='Описание' resize={'none'} height={'300'}/>
        <Button colorScheme='teal'>Создать</Button>
    </form>);
}