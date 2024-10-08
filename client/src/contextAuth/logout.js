export const logout = async (setIsAuthenticated) => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("tokenExpiration");
  localStorage.removeItem("userData");
  localStorage.removeItem("someOtherKey");
  localStorage.removeItem("userData");

  setIsAuthenticated(false);
};
