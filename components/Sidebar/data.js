import { CheckedList } from "@/app/assets/icons";
import {
  Box,
  FileHeart,
  Goal,
  Library,
  ListChecks,
  PenTool,
  ServerCog,
  Square,
  SquareCode,
  Users,
} from "lucide-react";

export const data = [
  {
    title: "Design",
    class: "ordinary",
    icon: <PenTool />,
  },
  {
    title: "Frontend",
    class: "ordinary",
    icon: <SquareCode />,
  },
  {
    title: "Backend",
    class: "ordinary",
    icon: <ServerCog />,
  },
];
export let section = [
  {
    title: "Team",
    class: "ordinary",
    icon: <Users />,
  },
  {
    title: "System",
    class: "ordinary",
    icon: <Box />,
  },
  {
    title: "Training",
    class: "ordinary",
    icon: <Goal />,
  },
  {
    title: "Health check",
    class: "ordinary",
    icon: <FileHeart />,
  },
  {
    title: "Matrix",
    class: "ordinary",
    icon: <ListChecks />,
  },
  {
    title: "Vision",
    class: "ordinary",
    icon: <Library />,
  },
  {
    title: "Plan",
    class: "ordinary",
    icon: <Library />,
  },
];
