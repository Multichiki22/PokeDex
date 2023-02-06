const regexTexto = /^[a-z A-Z]*$/;
const regexTipos = /^[a-zA-Z]*$/;

export function validateAll(nuevoPokemon, Tipos) {
  const { Nombre, Ataque,Peso,Altura } = nuevoPokemon;
  let errores = {};
  if (Nombre.length === 0) errores["Nombre"] = "Nombre es un campo obligatorio";
  if (Nombre !== Nombre.toLowerCase())
    errores["Nombre"] = "El nombre debe estar en minusculas";
  if (!regexTexto.test(Nombre))
    errores["Nombre"] = "El nombre solo debe contener carateres alfabeticos";
  if (Nombre.length > 12)
    errores["Nombre"] = "El nombre debe ser maximo de 12 caracteres";
  if (Nombre.length < 3)
    errores["Nombre"] = "El nombre debe ser minimo de 3 caracteres";
  if (Ataque === "") errores["Ataque"] = "Ataque es un campo obligatorio";
  if (Ataque < 0) errores["Ataque"] = "El Ataque no puede ser negativo";
  if (Ataque > 200) errores["Ataque"] = "El Ataque no puede ser mayor a 200";
  if (Peso < 0) errores["Peso"] = "El Peso no puede ser negativo";
  if (Peso > 200) errores["Peso"] = "El Peso no puede ser mayor a 200";
  if (Altura < 0) errores["Altura"] = "La Altura no puede ser negativo";
  if (Altura > 200) errores["Altura"] = "La Altura no puede ser mayor a 200";
  if (validateTypes(Tipos) !== true) errores["Tipos"] = validateTypes(Tipos);
  return errores;
}

export function validateInput(input, valor) {
  switch (input) {
    case "Nombre":
      if (!regexTexto.test(valor))
        return "El nombre solo debe contener carateres alfabeticos";
      if (valor.length > 12)
        return "El nombre debe ser maximo de 12 caracteres";
      if (valor.length < 3) return "El nombre debe ser minimo de 3 caracteres";
      if (valor.length === 0) return "Nombre es un campo obligatorio";
      if (valor !== valor.toLowerCase())
        return "El nombre debe estar en minusculas";
      return true;
    case "Ataque":
      if (valor === "") return "Ataque es un campo obligatorio";
      if (valor < 0) return "El Ataque no puede ser negativo";
      if (valor > 200) return "El Ataque no puede ser mayor a 200";
      return true;
    case "Peso":
      if (valor < 0) return "El Peso no puede ser negativo";
      if (valor > 200) return "El Peso no puede ser mayor a 200";
      return true;
    case "Altura":
      if (valor < 0) return "La Altura no puede ser negativo";
      if (valor > 200) return "La Altura no puede ser mayor a 200";
      return true;
    default:
      return true;
  }
}
export function validateTypes(Tipos) {
  if (Tipos === undefined || Tipos.length === 0)
    return "Debe agregar por lo menos un Tipo";
  let error = true;
  Tipos.forEach((tipo) => {
    if (!regexTipos.test(tipo))
      error = "El tipo solo debe contener carateres alfabeticos";
    if (tipo.length > 12) error = "El nombre debe ser maximo de 12 caracteres";
    if (tipo.length < 3) error = "El nombre debe ser minimo de 3 caracteres";
    if (tipo === "") error = "Hay un Tipo vacio";
  });
  return error;
}
