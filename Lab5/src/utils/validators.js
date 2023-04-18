export const validateEmail = (prevState, emailValue) => ({
    ...prevState,
    valid: { ...prevState.valid, value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue) }
})

export const validatePassword = (prevState, passwordValue) => ({
    ...prevState,
    uppercase: { ...prevState.uppercase, value: /[A-Z]/.test(passwordValue) },
    lowercase: { ...prevState.lowercase, value: /[a-z]/.test(passwordValue) },
    number: { ...prevState.number, value: /[0-9]/.test(passwordValue) },
    specialChar: { ...prevState.specialChar, value: /[^A-Za-z0-9]/.test(passwordValue) },
    length: { ...prevState.length, value: passwordValue.length >= 8 }
})