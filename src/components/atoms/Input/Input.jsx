export function Input({ placeholder, functionSet, role }) {
  let type = ''
  if (role == 'password') {
    type = 'password'
  } else {
    type = 'text'
  }
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => functionSet(e.target.value)}
    ></input>
  )
}
