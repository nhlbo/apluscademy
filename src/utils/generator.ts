const generateOtp = () => {
  const n = Math.floor(Math.random() * 10000)
  return String(n).padStart(4, '0')
}

const avatars = [
  'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5356129588e0430c7e22d9_peep-38.png',
  'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e53517fc6b2492d63287d6d_peep-11.png',
  'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e53566fc992503ea6c77af5_peep-41.png'
]

const generateAvatar = () => {
  return avatars[Math.floor(Math.random() * avatars.length)]
}

export { generateOtp, generateAvatar }
