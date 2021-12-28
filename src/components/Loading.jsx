const Loading = ({ loading }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className={loading ? "spinner-border" : ""} role="status"></div>
    </div>
  );
};

export default Loading;
