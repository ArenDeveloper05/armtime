const FormForRegions = () => {
  return (
    <form className="information-formForRegions">
      <div className="information-formForRegions-address">
        <label htmlFor="address">State / City / Village</label>
        <input type="text" name="address" id="address" />
      </div>
      <div className="information-formForRegions-address">
        <label htmlFor="address">Zip / Postal Code</label>
        <input type="text" name="address" id="address" />
      </div>
      <div className="information-formForRegions-address">
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" />
      </div>
    </form>
  );
};

export default FormForRegions;
