import { useSearchParams, useLocation } from "react-router-dom";

export default function About() {
  const [queryParams, setQueryParams] = useSearchParams();

  console.log("Location", useLocation());

  console.log("Query Params", queryParams.get("name"));
  return <h1>About</h1>;
}
