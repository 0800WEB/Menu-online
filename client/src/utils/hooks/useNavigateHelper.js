import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateHelper = () => {
  const navigate = useNavigate();

  const navigateToPath = useCallback((path) => {
    navigate(path);
  }, []);

  const navigateBack = () => {
    navigate(-1);
  };

  return {
    navigateToPath,
    navigateBack,
  };
};
