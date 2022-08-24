import { useEffect } from 'react';
import { useRouter } from "next/router";

const ProductsByCategory = () => {
  const router = useRouter();
  useEffect(() => {
    console.log('router: ', router);
  });

  return (
    <div>Testing category</div>
  );
}

export default ProductsByCategory;