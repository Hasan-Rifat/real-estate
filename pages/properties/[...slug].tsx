import React from "react";
import { useRouter } from "next/router";
type PropertyProps = {};

const Property: React.FC<PropertyProps> = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <section>
      <div className="max-w-[1210px] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        Have a good coding {slug}
      </div>
    </section>
  );
};
export default Property;
