const reviews = [
  {
    user: "UsuarioA",
    score: 5,
    opinion: "¡Increíble! El platillo llego fresco y delicioso.",
  },
  {
    user: "UsuarioB",
    score: 5,
    opinion: "Muy bueno, aunque algunas piezas estaban un poco saladas.",
  },
  {
    user: "UsuarioC",
    score: 5,
    opinion: "Me encantó la variedad y la presentación.",
  },
];

class FoodModel {
  constructor(product) {
    this.dataBaseId = product._id || "Error, no hay id en base de datos";
    this.menuId = product.id;
    this.foodTitle = product.name || "Título no disponible";
    this.image = product.image || "ruta/por/defecto.jpg";
    this.description = product.description || "Descripción no disponible";
    this.price = product.price || 0;
    this.reviews = reviews || product.reviews;
  }

  toPlainObject() {
    return {
      dataBaseId: this.dataBaseId,
      menuId: this.menuId,
      foodTitle: this.foodTitle,
      image: this.image,
      description: this.description,
      price: this.price,
      reviews: this.reviews,
    };
  }
}

export default FoodModel;
