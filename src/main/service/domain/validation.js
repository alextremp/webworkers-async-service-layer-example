const valueNotEmpty = (value, name) => {
  if (!value) {
    throw new Error(`${name} cannot be empty`)
  }
}

export {
  valueNotEmpty
}