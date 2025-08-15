import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
