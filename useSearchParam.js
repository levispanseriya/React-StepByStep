import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  console.warn(searchParam.get("age"));
  console.warn(searchParam.get("city"));

  const age = searchParam.get("age");
  const city = searchParam.get("city");
  return (
    <div>
      <h2>Age is :{age}</h2>
      <h2>City is :{city}</h2>
      <input
        type="text"
        onChange={(e) => setSearchParam({ text: e.target.value, age:10 })}
        placeholder="Set Text in query Params"
      />

      <button onClick={() => setSearchParam({ age: 15 })}>
        Set Age in Queary Params
      </button>
    </div>
  );
};

export default Filter;
