import { useState } from "react";
import { Pagination } from "@omgitsarnout/arniewaves-design-system";

export const Paginator = () => {
  const [page, setPage] = useState(3);
  return (
    <div style={{ maxWidth: 460 }}>
      <Pagination page={page} total={12} onChange={setPage} />
    </div>
  );
};

export const FirstPage = () => {
  const [page, setPage] = useState(1);
  return (
    <div style={{ maxWidth: 460 }}>
      <Pagination page={page} total={8} onChange={setPage} />
    </div>
  );
};
