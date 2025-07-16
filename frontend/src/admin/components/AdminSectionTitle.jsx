import getPageTitle from "../utils/getPageTitle";

const AdminSectionTitle = () => {
  const { title, icon_class } = getPageTitle();
  return (
    <h1 className="a-text--title">
      <i className={`${icon_class}`}></i>
      {title}
    </h1>
  );
};

export default AdminSectionTitle;
