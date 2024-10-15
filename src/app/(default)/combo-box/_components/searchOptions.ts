"use server";

import type { SearchOptionType } from "@/app/_components/Aria/IncrementalSearchBox";

const masterOptions: SearchOptionType[] = [
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

export async function searchOptions(
  keyword: string | undefined,
): Promise<SearchOptionType[]> {
  return masterOptions.filter((option) => {
    return option.name.includes(keyword || "");
  });
}
