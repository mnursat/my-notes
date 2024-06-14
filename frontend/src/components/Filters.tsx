import { Input, Select } from "@chakra-ui/react";

export default function Filters() {
  return (
    <div className="flex flex-col gap-3">
      <Input placeholder="Поиск" />
      <Select>
        <option>Сначала новые</option>
        <option>Сначала старые</option>
      </Select>
    </div>
  );
}
