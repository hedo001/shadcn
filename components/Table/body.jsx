import MyTableHeader from "./TableHeader";
import stl from "./style.module.scss";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Arrow, Threedots } from "@/app/assets/icons";
import { ChevronsDownUp, ChevronsUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
const MyTable = () => {
  let data = [
    {
      name: "Saidakbar Mahmudkhujaev",
      status: "stable",
      date: "12.08.2021",
      level: "3",
    },
    {
      name: "Saidakbar Mahmudkhujaev",
      status: "stable",
      date: "12.08.2021",
      level: "3",
    },
    {
      name: "Saidakbar Mahmudkhujaev",
      status: "stable",
      date: "12.08.2021",
      level: "3",
    },
    {
      name: "Saidakbar Mahmudkhujaev",
      status: "stable",
      date: "12.08.2021",
      level: "3",
    },
  ];
  return (
    <div className={stl.table}>
      <MyTableHeader />
      <Table className={stl.mainTable}>
        <TableHeader>
          <TableRow>
            <TableHead>
              <div className={stl.theader}>
                {" "}
                Full name <ChevronsUpDown />
              </div>
            </TableHead>
            <TableHead>
              <div className={stl.theader}>
                {" "}
                Status <ChevronsUpDown />
              </div>
            </TableHead>
            <TableHead>
              <div className={stl.theader}>
                {" "}
                Date of receipt <ChevronsUpDown />
              </div>
            </TableHead>
            <TableHead>
              <div className={stl.theader}>
                Level <ChevronsUpDown />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <Select>
                    <SelectTrigger className={stl.select}>
                      <SelectValue placeholder={item.status} />
                      
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem className={stl.item} value="stable">
                          stable
                        </SelectItem>
                        <SelectItem className={stl.item} value="canLeave">
                          can leave
                        </SelectItem>
                        <SelectItem className={stl.item} value="warning">
                          warning
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.level}</TableCell>
                <TableCell>
                  <Button variant="ghost">
                    <Threedots />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyTable;
