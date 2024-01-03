import Link from "next/link";
import { data, section } from "./data";
import "./style.scss";
import { useRouter } from "next/router";
const Sidebar = () => {
//   let { pathname } = useRouter();
  return (
    <div className="sidebar">
      <ul className="department">
        <li className="bold">Department</li>
        {data.map((item, index) => {
          return (
            <li key={index}>
              {" "}
              <Link className={item.class} href={item.title}>
                {" "}
                {item.icon}
                {item.title}
              </Link>
            </li>
          );
        })}{" "}
      </ul>
      <ul className="department">
        <li className="bold">Section</li>
        {section.map((item, index) => {
          return (
            <li key={index}>
              {" "}
              <Link className={item.class} href={item.title}>
                {" "}
                {item.icon} {item.title}
              </Link>
            </li>
          );
        })}{" "}
      </ul>
    </div>
  );
};

export default Sidebar;
