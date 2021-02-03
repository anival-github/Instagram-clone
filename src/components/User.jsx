const User = (props) => {
  const {
    min,
    src,
    alt,
    name
  } = props
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className={min ? "user min" : "user"}>
      <img src={src} alt={alt}></img>
      <div>{name}</div>
    </a>
  )
}

export default User