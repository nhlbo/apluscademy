function isEmptyField() {
  if (
    document.getElementById('current-password-field').value === '' ||
    document.getElementById('new-password-field').value === '' ||
    document.getElementById('confirm-new-password-field').value === ''
  ) {
    document.getElementById('save-password-button').disabled = true
  } else {
    document.getElementById('save-password-button').disabled = false
  }
}
