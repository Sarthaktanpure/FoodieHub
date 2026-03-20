// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle')
  const menu = document.querySelector('.nav-menu')
  if (!toggle || !menu) return

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
  })
})
