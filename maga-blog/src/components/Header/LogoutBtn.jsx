import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await authService.account.logout();
    dispatch(logout());
  };

  return (
    <button className=" inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ">
      Logout
    </button>
  );
}

export default LogoutBtn;
