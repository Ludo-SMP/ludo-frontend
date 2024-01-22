export const PlatformButton = () => {
  return (
    <div>
      <select name="Progress" className="select">
        <option disabled selected>
          플랫폼
        </option>
        <option value="gathertown">게더타운</option>
        <option value="googlemeet">구글미트</option>
      </select>
    </div>
  );
};
