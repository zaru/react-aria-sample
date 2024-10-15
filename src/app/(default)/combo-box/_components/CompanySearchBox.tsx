import { searchOptions } from "@/app/(default)/combo-box/_components/searchOptions";
import {
  IncrementalSearchBox,
  type SearchOptionType,
} from "@/app/_components/Aria/IncrementalSearchBox";
import { useAsyncList } from "@react-stately/data";
import { useState } from "react";
import type { Key } from "react-aria-components";

export function CompanySearchBox() {
  const list = useAsyncList<SearchOptionType>({
    async load({ filterText }) {
      const items = await searchOptions(filterText);
      if (items.length === 0) {
        const emptyItems: SearchOptionType[] = [
          { id: 0, name: "見つかりませんでした" },
        ];
        return { items: emptyItems };
      }
      return {
        items,
      };
    },
  });

  const [optionId, setOptionId] = useState<Key | null>(null);

  const handleSelectionChange = (selectedKey: Key | null) => {
    // MEMO: ここで選択後の挙動を実装する
    setOptionId(selectedKey);
  };

  return (
    <div className="flex items-center gap-4">
      <IncrementalSearchBox
        list={list}
        handleSelectionChange={handleSelectionChange}
      />
      <p>Selected option id: {optionId}</p>
    </div>
  );
}
