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
import { Arrow } from "@/app/assets/icons";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
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
              {/* <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Full name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
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
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.level}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyTable;
