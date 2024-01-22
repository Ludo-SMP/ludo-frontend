export const ContactButton = () => {
  return (
    <div>
      <select name="contact" className="select">
        <option disabled selected>
          연락방법
        </option>
        <option value="phone">핸드폰</option>
        <option value="email">이메일</option>
        <option value="kakaotalk">카카오톡</option>
      </select>
    </div>
  );
};
