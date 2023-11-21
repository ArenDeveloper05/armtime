import "./RequestError.scss";

const RequestError = () => {
  return (
    <div className="request">
      <div className="request-inner">
        <div className="request-inner-title">
          <h1>error</h1>
        </div>
        <div className="request-inner-text">
          The request could not be satisfied
        </div>
      </div>
    </div>
  );
};

export default RequestError;
