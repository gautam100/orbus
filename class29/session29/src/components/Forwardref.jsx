import { forwardRef } from "react";

const Forwardref = (props,nameRef) => {
  return (
    <div>
      <input type="text" id="name" ref={nameRef} />
    </div>
  );
};

export default forwardRef(Forwardref);
