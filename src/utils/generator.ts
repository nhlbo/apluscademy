const generateOtp = () => {
  const n = Math.floor(Math.random() * 10000)
  return String(n).padStart(4, '0')
}

export { generateOtp }
