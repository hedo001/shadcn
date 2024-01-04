import { Input } from "@/components/ui/input";
import { AddButton, ViewsIcon } from "../../../app/assets/icons/index";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import stl from "../style.module.scss";
import { useState } from "react";
// import { useForm } from "react-hook-form";

import { X } from "lucide-react";

const TableHeader = () => {
  const [checked, setChecked] = useState([]);
  const [proiority, setPriority] = useState([]);

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  const onCheckedChange = (data, title, cheked) => {
    if (data) {
      cheked((prev) => [...prev, title]);
    } else {
      cheked((prev) => [...prev.filter((item) => item !== title)]);
    }
  };
  return (
    <div className={stl.tableHeader}>
      <div className={stl.filter}>
        <Input placeholder="Filter tasks..." />
        <Popover>
          <PopoverTrigger className={stl.popover}>
            <AddButton /> Status
          </PopoverTrigger>
          <PopoverContent className={stl.content}>
            <Label>
              <Checkbox
                id=" Stable"
                onCheckedChange={(id) =>
                  onCheckedChange(id, "Stable", setChecked)
                }
              />
              Stable
            </Label>
            <Label>
              <Checkbox
                id="Can leave"
                onCheckedChange={(id) =>
                  onCheckedChange(id, "Can leave", setChecked)
                }
              />
              Can leave
            </Label>
            <Label>
              <Checkbox
                onCheckedChange={(id) =>
                  onCheckedChange(id, "Warning", setChecked)
                }
                id="Warning"
              />
              Warning
            </Label>
          </PopoverContent>
        </Popover>
        <Popover>
          {checked.length > 0
            ? checked.map((item, index) => {
                return (
                  <div key={index} className={stl.button} variant="outline">
                    {item}
                    <button
                      onClick={() => {
                        onCheckedChange(false, item, setChecked);
                      }}
                    >
                      {" "}
                      <X />
                    </button>
                  </div>
                );
              })
            : null}
          <PopoverTrigger className={stl.popover}>
            <AddButton /> Priority
          </PopoverTrigger>
          <PopoverContent className={stl.content}>
            <Label>
              <Checkbox
                onCheckedChange={(id) => {
                  onCheckedChange(id, "Level 1", setPriority);
                }}
              />
              Level 1
            </Label>
            <Label>
              <Checkbox
                onCheckedChange={(id) => {
                  onCheckedChange(id, "Level 2", setPriority);
                }}
              />
              Level 2
            </Label>
            <Label>
              <Checkbox
                onCheckedChange={(id) => {
                  onCheckedChange(id, "Level 3", setPriority);
                }}
              />
              Level 3
            </Label>
          </PopoverContent>
        </Popover>
        {proiority.length > 0
          ? proiority.map((item, index) => {
              return (
                <div key={index} className={stl.button}>
                  {item}
                  <button
                    onClick={() => {
                      onCheckedChange(false, item, setPriority);
                    }}
                  >
                    <X />
                  </button>
                </div>
              );
            })
          : null}
      </div>
      <Button className={stl.button} variant="outline">
        <ViewsIcon /> Views
      </Button>
    </div>
  );
};

export default TableHeader;
