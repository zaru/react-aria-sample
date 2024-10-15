"use client";

import { Button } from "@/app/_components/Aria/Button";
import { Checkbox } from "@/app/_components/Aria/Checkbox";
import { CheckboxGroup } from "@/app/_components/Aria/CheckboxGroup";
import { DialogTrigger } from "@/app/_components/Aria/Dialog";
import { Label } from "@/app/_components/Aria/Field";
import { Form } from "@/app/_components/Aria/Form";
import { Popover } from "@/app/_components/Aria/Popover";
import { Select, SelectItem } from "@/app/_components/Aria/Select";
import { TextField } from "@/app/_components/Aria/TextField";
import { AwayPopover } from "@/app/_components/Sample/AwayPopover";
import { SampleModal } from "@/app/_components/Sample/SampleModal";
import { X } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">Button</div>
        <div className="px-4 py-5 sm:p-6">
          <div className="flex gap-4">
            <Button>Button</Button>
            <Button variant="secondary">Button</Button>
            <Button variant="destructive">Button</Button>
            <Button variant="icon">
              <X />
              Close
            </Button>
            <Button isDisabled={true}>Button</Button>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">Modal</div>
        <div className="px-4 py-5 sm:p-6">
          <div className="flex gap-4">
            <SampleModal />
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">Form</div>
        <div className="px-4 py-5 sm:p-6">
          <div className="flex gap-4">
            <Form method="get">
              <TextField
                label="Name"
                description="Description text"
                name="name"
                isRequired={true}
              />
              <CheckboxGroup isRequired={true}>
                <Label>Favorite sports</Label>
                <Checkbox name="check" value="Soccer">
                  Soccer
                </Checkbox>
                <Checkbox name="check" value="baseball">
                  Baseball
                </Checkbox>
              </CheckboxGroup>
              <Select
                label="Select item"
                description="Description text"
                aria-label="select status"
                isRequired={true}
                items={[
                  { id: 1, name: "option A" },
                  { id: 2, name: "option B" },
                  { id: 3, name: "option C" },
                ]}
              >
                {(item) => <SelectItem>{item.name}</SelectItem>}
              </Select>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:px-6">Popover</div>
          <div className="px-4 py-5 sm:p-6">
            <div className="flex gap-4">
              <DialogTrigger>
                <Button type="button">Open Popover</Button>
                <Popover placement="end" style={{ zIndex: "10" }}>
                  <div className="p-4">Popover content</div>
                </Popover>
              </DialogTrigger>
            </div>
            <div className="mt-5">
              <AwayPopover />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
