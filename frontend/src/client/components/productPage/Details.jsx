export const Details = ({ product }) => {
  let { sections } = product.parent;
  return (
    <div className="md:w-3/6 space-y-6">
      <section className="bg-white p-6 flex flex-col gap-4">
        <div className="space-y-2">
          <h1 className="text-[2rem] font-medium leading-[3rem]">
            {product?.parent?.product_title}
          </h1>
          <h2 className="text-[1.6rem]">{product?.parent?.brand}</h2>
        </div>

        <div className="flex gap-6">
          <p className="text-[3rem] font-medium">₹{product.price}</p>
        </div>

        <div className="space-y-[.5rem] mt-8">
          <div className="font-medium">Product Description</div>
          <p className="line-clamp-4">{product?.parent?.description}</p>
        </div>
      </section>
      {sections && (
        <section className="bg-white p-6">
          {sections.map((section) => (
            <div className="border-b border-neutral-300 last:border-b-0 space-y-4">
              <div className="font-medium">{section.title}</div>
              <div>
                {section.details.map((detail) => (
                  <div className="flex justify-between gap-8">
                    <div>{detail.label}</div>
                    <div>{detail.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
