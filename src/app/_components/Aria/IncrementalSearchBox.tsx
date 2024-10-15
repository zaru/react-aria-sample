import { BaseIncrementalSearchBox } from "@/app/_components/Aria/BaseIncrementalSearchBox";
import { DropdownItem } from "@/app/_components/Aria/ListBox";
import type { AsyncListData } from "@react-stately/data";
import type { Key } from "react-aria-components";

export type SearchOptionType = {
  id: number;
  name: string;
};

type Props = {
  list: AsyncListData<SearchOptionType>;
  handleSelectionChange: (selectedKey: Key | null) => void;
};

export function IncrementalSearchBox({ list, handleSelectionChange }: Props) {
  return (
    <BaseIncrementalSearchBox
      defaultItems={list.items}
      onSelectionChange={handleSelectionChange}
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
      shouldFocusWrap={true}
      allowsEmptyCollection={true}
      isRequired={true}
      popoverOpen={list.filterText !== ""}
    >
      {(item) => (
        <DropdownItem isDisabled={item.id === 0}>{item.name}</DropdownItem>
      )}
    </BaseIncrementalSearchBox>
  );
}
