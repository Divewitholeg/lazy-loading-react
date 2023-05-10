import React, { lazy, Suspense, useState } from "react";

const One = lazy(() => import("./One"));
const Two = lazy(() => import("./Two"));
const Three = lazy(() => import("./Three"));

const Articles = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Articles</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <One />
          <Two />
          <Three />
        </Suspense>
      )}
    </div>
  );
};
export default Articles;
