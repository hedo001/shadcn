import stl from './style.module.scss'
export const Navbar = () => {
  return (
    <ul className={stl.list}>
      <li>Dashboard</li>
      <li>Files</li>
      <li>Settings</li>
      <li>Account</li>
    </ul>
  );
};
