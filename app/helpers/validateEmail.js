export function validateEmail(email) {
  // Usuwamy białe znaki
  const trimmed = email.trim()

  // Jeśli puste
  if (!trimmed) {
    return 'Adres e-mail jest wymagany.'
  }

  // RegExp dla formatu e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(trimmed)) {
    return 'Podaj poprawny adres e-mail.'
  }

  // Jeśli wszystko OK — brak błędu
  return ''
}