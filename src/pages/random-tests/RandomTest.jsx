import React from "react";

const RandomTest = () => {
  const onSubmit = (data) => {
    console.log("data");
  };
  return (
    <div>
      <form action="onSubmit">
        <input type="text" name="fName" />
      </form>
    </div>
  );
};

const SubmitBtn = () => {
  const fdata = useForm;
  return <button disable>Submit</button>;
};

export default RandomTest;
