import { AllCategories, RecentItems } from "./data";
import ViewItems from "./view-items";

const ViewAll = () => {
  return (
    <>
      <ViewItems Data={RecentItems} title="Recent" />
      <ViewItems Data={AllCategories} title="All Categories" />
    </>
  );
};

export default ViewAll;
