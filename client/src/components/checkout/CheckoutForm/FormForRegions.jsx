const FormForRegions = () => {
  return (
    <form className="information-formForRegions">
      <div className="information-formForRegions-address">
        <label
          htmlFor="address"
          className="information-formForRegions-address-state"
        >
          State / City / Village
        </label>
        <input type="text" name="address" id="address" />
      </div>
      <div className="information-formForRegions-address">
        <label
          htmlFor="address"
          className="information-formForRegions-address-zip"
        >
          Zip / Postal Code
        </label>
        <input type="text" name="address" id="address" />
      </div>
      <div className="information-formForRegions-address">
        <label
          htmlFor="address"
          className="information-formForRegions-address-adr"
        >
          Address
        </label>
        <input type="text" name="address" id="address" />
      </div>
    </form>
  );
};

export default FormForRegions;
