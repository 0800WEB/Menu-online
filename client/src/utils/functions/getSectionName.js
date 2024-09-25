import { HOME, NOTIFICATIONS, PROFILE_USER, OFFERS } from "../../routes/constPath"

export const getSectionName = (location) => {
  switch (location.pathname) {
    case HOME:
      return "Menú";
    case OFFERS:
      return "Recomendados";
    case NOTIFICATIONS:
      return "Notificaciones";
    case PROFILE_USER:
      return "Mi Perfil";
    default:
      return "Menú";
  }
};
