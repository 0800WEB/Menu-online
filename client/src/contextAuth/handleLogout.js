import { clearUser } from "../state/slices/user/user";

export const handleLogout = (dispatch) => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("tokenExpiration");
  localStorage.removeItem("userData");
  dispatch(clearUser());
  window.location.reload();
};
