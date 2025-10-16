const Notification = ({ data }) => {
  const notificationStyles = {
    color: data.error ? "red" : "green",
    padding: 10,
    background: "lightgray",
    borderRadius: 5,
    fontSize: 20,
    borderStyle: "solid",
    marginBottom: 10,
  };

  if (data.message === null) {
    return null;
  }

  return <div style={notificationStyles}>{data.message}</div>;
};

export default Notification;
