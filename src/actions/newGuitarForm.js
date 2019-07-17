export const updateGuitarForm = formData => {
  return {
    type: "UPDATE_GUITAR_FORM",
    formData
  }
}

export const resetSignupForm = () => {
  return {
    type: "RESET_GUITAR_FORM",
  }
}
