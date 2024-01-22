const LoadingSpinner = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border"
        style={{ width: "4rem", height: "4rem", margin: "50px" }}
        id="spinner"
        role="status"
      ></div>
    </div>
  );
};

export default LoadingSpinner;
