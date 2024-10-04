function generarItem(data) {
  return `
        <div class="item">
            <div class="product-box">
                <div class="product-media">
                    <img class="prod-img" alt="" src="./assets/img/products/${data.name_file}" />
                    <img class="shape" alt="" src="./assets/img/icons/shap-small.png" />
                    <div class="prod-icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-shopping-basket"></a>
                        <a href="#product-preview" data-toggle="modal" class="fa fa-expand"></a>
                    </div>
                </div>
                <div class="product-caption">
                    <h3 class="product-title">
                        <a href="#">
                            <strong>${data.name}</strong>
                            <span class="light-font"> Orgánico </span>
                        </a>
                    </h3>
                    <div class="price">
                        <strong class="clr-txt">$ ${data.price} </strong>
                    </div>
                </div>
            </div>
            <div class="product-box">
                <div class="product-media">
                    <img class="prod-img" alt="" src="./assets/img/products/${data.name_file}" />
                    <img class="shape" alt="" src="./assets/img/icons/shap-small.png" />
                    <div class="prod-icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-shopping-basket"></a>
                        <a href="#product-preview" data-toggle="modal" class="fa fa-expand"></a>
                    </div>
                </div>
                <div class="product-caption">
                    <h3 class="product-title">
                        <a href="#">
                            <strong>${data.name}</strong>
                            <span class="light-font"> Orgánico </span>
                        </a>
                    </h3>
                    <div class="price">
                        <strong class="clr-txt">$ ${data.price} </strong>
                    </div>
                </div>
            </div>
        </div>
    `;
}

const data = {
  frutas: [
    {
      name_file: "PH_Aguacate.png",
      name: "Aguacate",
      price: 10,
    },
    {
      name_file: "PH_Arandano.png",
      name: "Arándano",
      price: 10,
    },
    {
      name_file: "PH_Cereza.png",
      name: "Cereza",
      price: 10,
    },
    {
      name_file: "PH_Coco.png",
      name: "Coco",
      price: 10,
    },
    {
      name_file: "PH_Durazno.png",
      name: "Durazno",
      price: 10,
    },
    {
      name_file: "PH_Fresa.png",
      name: "Fresa",
      price: 10,
    },
    {
      name_file: "PH_Limon.png",
      name: "Limón",
      price: 10,
    },
    {
      name_file: "PH_Manzana roja.png",
      name: "Manzana roja",
      price: 10,
    },
    {
      name_file: "PH_Melon chino.png",
      name: "Melón chino",
      price: 10,
    },
    {
      name_file: "PH_Naranja.png",
      name: "Naranja",
      price: 10,
    },
    {
      name_file: "PH_Papaya.png",
      name: "Papaya",
      price: 10,
    },
    {
      name_file: "PH_Pera.png",
      name: "Pera",
      price: 10,
    },
    {
      name_file: "PH_Piña.png",
      name: "Piña",
      price: 10,
    },
    {
      name_file: "PH_Platano.png",
      name: "Plátano",
      price: 10,
    },
    {
      name_file: "PH_Sandia.png",
      name: "Sandía",
      price: 10,
    },
    {
      name_file: "PH_Uvas.png",
      name: "Uvas",
      price: 10,
    },
  ],
  verduras: [
    {
      name_file: "PH_Ajo.png",
      name: "Ajo",
      price: 10,
    },
    {
      name_file: "PH_Apio.png",
      name: "Apio",
      price: 10,
    },
    {
      name_file: "PH_Betabel.png",
      name: "Betabel",
      price: 10,
    },
    {
      name_file: "PH_Brocoli.png",
      name: "Brócoli",
      price: 10,
    },
    {
      name_file: "PH_Calabaza.png",
      name: "Calabaza",
      price: 10,
    },
    {
      name_file: "PH_Cebolla.png",
      name: "Cebolla",
      price: 10,
    },
    {
      name_file: "PH_Chile.png",
      name: "Chile",
      price: 10,
    },
    {
      name_file: "PH_Col.png",
      name: "Col",
      price: 10,
    },
    {
      name_file: "PH_Esparrago.png",
      name: "Espárrago",
      price: 10,
    },
    {
      name_file: "PH_Espinaca.png",
      name: "Espinaca",
      price: 10,
    },
    {
      name_file: "PH_Frijol.png",
      name: "Frijol",
      price: 10,
    },
    {
      name_file: "PH_Germinado.png",
      name: "Germinado",
      price: 10,
    },
    {
      name_file: "PH_Jicama.png",
      name: "Jícama",
      price: 10,
    },
    {
      name_file: "PH_Jitomate.png",
      name: "Jitomate",
      price: 10,
    },
    {
      name_file: "PH_Lechuga.png",
      name: "Lechuga",
      price: 10,
    },
    {
      name_file: "PH_Morron.png",
      name: "Morrón",
      price: 10,
    },
    {
      name_file: "PH_Nopal.png",
      name: "Nopal",
      price: 10,
    },
    {
      name_file: "PH_Pepino.png",
      name: "Pepino",
      price: 10,
    },
    {
      name_file: "PH_Pimiento.png",
      name: "Pimiento",
      price: 10,
    },
    {
      name_file: "PH_Zanahoria.png",
      name: "Zanahoria",
      price: 10,
    },
  ],
  otros: [
    {
      name_file: "PH_Aceite.png",
      name: "Aceite",
      price: 10,
    },
    {
      name_file: "PH_Harina.png",
      name: "Harina",
      price: 10,
    },
    {
      name_file: "PH_Huevo.png",
      name: "Huevo",
      price: 10,
    },
    {
      name_file: "PH_Sal.png",
      name: "Sal",
      price: 10,
    },
    {
      name_file: "PH_Silantro.png",
      name: "Cilantro",
      price: 10,
    },
    {
      name_file: "PH_Vainilla.png",
      name: "Vainilla",
      price: 10,
    },
  ],
};

$(document).ready(function () {
  const categories = Object.keys(data); // Obtiene las categorías (frutas, verduras, otros)

  let navTabsHtml = ""; // Para los botones
  let tabContentHtml = ""; // Para los divs de contenido

  categories.forEach((category, index) => {
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1); // Capitaliza el nombre de la categoría
    const categoryId = `product-tab-${index + 1}`; // Genera un ID único basado en el índice

    // Generar el botón de la categoría
    navTabsHtml += `
        <li class="">
            <a href="#${categoryId}" data-toggle="tab">
            <strong>${categoryName}</strong>
            </a>
        </li>
        `;

    // Generar el div de la categoría con productos
    let itemsHtml = "";
    data[category].forEach((product) => {
      itemsHtml += generarItem(product); // Usamos la función generarItem() para cada producto
    });

    // Agregar la clase 'in active' para la primera categoría
    if (index === 0) {
      tabContentHtml += `
            <div id="${categoryId}" class="tab-pane fade in active">
              <div class="product-slider-1 dots-1">
                ${itemsHtml}
              </div>
            </div>
            `;
    } else {
      tabContentHtml += `
            <div id="${categoryId}" class="tab-pane fade">
              <div class="product-slider-1 dots-1">
                ${itemsHtml}
              </div>
            </div>
            `;
    }
  });

  // Espera hasta que los estilos se carguen completamente antes de insertar los productos
  $(window).on("load", function () {
    // $("#tabs").html(navTabsHtml);
    // $("#contenedor-section").html(tabContentHtml);
  });
});
