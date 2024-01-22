export const ProgressButton = () => {
  return (
    <div>
      <select name="Progress" className="select">
        <option disabled selected>
          진행방식
        </option>
        <option value="gathertown">인증</option>
        <option value="googlemeet">깃허브 제출</option>
      </select>
    </div>
  );
};
