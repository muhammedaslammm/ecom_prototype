const ProductDesc = () => {
  return (
    <div className="a-section--box space-y-8">
      <div className="space-y-2">
        <label htmlFor="" className="a-text--label">
          Title
        </label>
        <input
          type="text"
          className="a-input"
          placeholder="Eg: Summer Elclipse Street Men's Wear"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="" className="a-text--label">
          Brand
        </label>
        <input type="text" className="a-input" placeholder="Eg: Monova Seiy" />
      </div>
      <div className="space-y-2">
        <label htmlFor="" className="a-text--label">
          Description
        </label>
        <textarea
          rows={6}
          className="a-input"
          placeholder="Eg: This product offer you the best feel one would expect to get from a wear during summer during day and night ..."
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="" className="a-text--label">
          Category
        </label>
        <select name="category" id="category" className="a-input">
          <option value="" selected disabled>
            Select Category
          </option>
        </select>
      </div>
    </div>
  );
};

export default ProductDesc;
