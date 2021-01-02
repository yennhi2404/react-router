import { Prompt } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="App">
      Đây là trang liên hệ <br />
      <button
        type="button"
        className="btn btn-info"
        onClick={() => setIsChecked(false)}
      >
        Cho phép
      </button>
      <br />
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setIsChecked(true)}
      >
        Không cho phép
      </button>
      <Prompt
        when={isChecked}
        message={(location) => `Bạn chắc chắn muốn đi đến ${location.pathname}`}
      />
      <br />
    </div>
  );
}

export default Contact;
