import "./Error.scss";

const Error = () => {
  return (
    <div className="error">
      <div className="error-inner">
        <div className="error-inner-number">
          <h1>404</h1>
        </div>
        <div className="error-inner-text">Page Not Found</div>
      </div>
    </div>
  );
};

export default Error;
