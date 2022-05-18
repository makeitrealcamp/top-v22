const Button = ({ event, children }) => {
  return <button onClick={event}>{children}</button>;
};

export default Button;
