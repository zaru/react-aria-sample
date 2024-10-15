import { ComboBox } from "@/app/_components/Aria/ComboBox";
import { DropdownItem } from "@/app/_components/Aria/ListBox";
import { useState } from "react";
import type { Key } from "react-aria-components";

export function SimpleComboBox() {
  const options = [
    { id: 1, name: "Aerospace" },
    { id: 2, name: "Mechanical" },
    { id: 3, name: "Civil" },
    { id: 4, name: "Biomedical" },
    { id: 5, name: "Nuclear" },
    { id: 6, name: "Industrial" },
    { id: 7, name: "Chemical" },
    { id: 8, name: "Agricultural" },
    { id: 9, name: "Electrical" },
  ];
  const [majorId, setMajorId] = useState<Key | null>(null);

  const handleSelectionChange = (selectedKey: Key | null) => {
    console.log("selectedKey:", selectedKey);
    setMajorId(selectedKey);
  };

  return (
    <div className="flex items-center gap-4">
      <ComboBox
        defaultItems={options}
        onSelectionChange={handleSelectionChange}
        isRequired={true}
      >
        {(item) => <DropdownItem>{item.name}</DropdownItem>}
      </ComboBox>
      <p>Selected topic id: {majorId}</p>
    </div>
  );
}
