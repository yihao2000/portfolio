import axios from "axios";

export const fetchData = async () => {
  const res = await fetch("../utils/data.json");

  return res;
};
