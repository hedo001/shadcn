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
import { useForm } from "react-hook-form";
const TableHeader = () => {
  const [checked, setChecked] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
                  id ? setChecked([...checked, "Stable"]) : null
                }
              />
              Stable
            </Label>
            <Label>
              <Checkbox
                id="Can leave"
                onCheckedChange={(id) =>
                  id ? setChecked([...checked, "Can leave"]) : null
                }
              />
              Can leave
            </Label>
            <Label>
              <Checkbox
                onCheckedChange={(id) =>
                  id ? setChecked([...checked, "Warning"]) : null
                }
                id="Warning"
              />
              Warning
            </Label>
          </PopoverContent>
        </Popover>
        <Popover>
          {checked.length > 0
            ? checked.map((item) => {
                return (
                  <Button className={stl.button} variant="outline">
                    {item}
                  </Button>
                );
              })
            : null}
          <PopoverTrigger className={stl.popover}>
            <AddButton /> Priority
          </PopoverTrigger>
          <PopoverContent className={stl.content}>
            <Label>
              <Checkbox onCheckedChange={(e) => console.log(e)} />
              Level 1
            </Label>
            <Label>
              <Checkbox />
              Level 2
            </Label>
            <Label>
              <Checkbox />
              Level 3
            </Label>
          </PopoverContent>
        </Popover>
      </div>
      <Button className={stl.button} variant="outline">
        <ViewsIcon /> Views
      </Button>
    </div>
  );
};

export default TableHeader;
