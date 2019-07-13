export default function() {

  if(localStorage.getItem("role") === 'ADMIN'){
  return [
    {
      title: "Residencias",
      htmlBefore: '<i class="material-icons">location_city</i>',
      to: "/Residencias",
    },
    {
      title: "Tipos de propiedades",
      htmlBefore: '<i class="material-icons">category</i>',
      to: "/TiposDePropiedades",
    },
    {
      title: "Propiedades",
      htmlBefore: '<i class="material-icons">home</i>',
      to: "/Propiedades",
    },
    {
      title: "Servicios",
      htmlBefore: '<i class="material-icons">format_paint</i>',
      to: "/Servicios",
    },
    {
      title: "Gastos",
      htmlBefore: '<i class="material-icons">account_balance_wallet</i>',
      to: "/Gastos",
    },
    {
      title: "Cuentas por cobrar",
      htmlBefore: '<i class="material-icons">attach_money</i>',
      to: "/CuentasPorCobrar",
    },
    {
      title: "Cargar pago",
      htmlBefore: '<i class="material-icons">payment</i>',
      to: "/CargarPago",
    }
  ];
  }else{
    return[
      {
        title: "Deudas",
        htmlBefore: '<i class="material-icons">attach_money</i>',
        to: "/Deudas",
      },      
      {
        title: "Formular Pago",
        htmlBefore: '<i class="material-icons">payment</i>',
        to: "/SubirPago",
      }, 
      {
        title: "Ver Gastos",
        htmlBefore: '<i class="material-icons">account_balance</i>',
        to: "/VerGastos",
      }  
    ]
  }
}
