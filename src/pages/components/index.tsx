import ComponentDemoBlock from "components/Blocks/ComponentDemoBlock";

const ComponentListViewPage = () => {
  return (
    <div>
      <ComponentDemoBlock />
      <ComponentDemoBlock order="reversed" />
      <ComponentDemoBlock />
      <ComponentDemoBlock order="reversed" />
      <ComponentDemoBlock />
    </div>
  );
};

export default ComponentListViewPage;
