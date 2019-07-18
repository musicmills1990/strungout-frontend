export const updateGuitarForm = formData => {
  return {
    type: "UPDATE_GUITAR_FORM",
    formData
  }
}

export const resetGuitarForm = () => {
  return {
    type: "RESET_GUITAR_FORM",
  }
}
