
export const WYSIWYGKey = import.meta.env.VITE_TINYMCE_API_KEY;

export const config = {
  language: 'es',
  onboarding: false,
  skin: localStorage.getItem("theme") === "dark"
    ? "oxide-dark"
    : "oxide",
  content_css: localStorage.getItem("theme") === "dark"
    ? "dark"
    : "default",
}
