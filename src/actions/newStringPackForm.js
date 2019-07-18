export const updateStringPackForm = formData => {
  return {
    type: "UPDATE_STRINGPACK_FORM",
    formData
  }
}

export const resetStringPackForm = () => {
  return {
    type: "RESET_STRINGPACK_FORM",
  }
}
