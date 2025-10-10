const ProductsGridTool = ({ countmsg, handleSorting, sort }) => {
  return (
    <div className="my-[1rem] flex justify-between items-center">
      <p className="text-[1.7rem] text-gray-800 capitalize font-medium">
        {countmsg}
      </p>
    </div>
  );
};

export default ProductsGridTool;
