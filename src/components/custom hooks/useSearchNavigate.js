import React from "react";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
export default function useSearchNavigate() {
  const navigate = useNavigate();
  return (path, query) => {
    navigate(`${path}?${createSearchParams(query)}`);
  };
}
