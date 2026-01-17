export default function Sidebar({
  handleTabChange,
  selectedTab,
}: {
  handleTabChange: (tab: string) => void;
  selectedTab: string;
}) {
  const tabs: string[] = ["Dashboard", "Analysis", "Tuning", "Settings"];

  return (
    <div className="w-60 bg-gray-800">
      <ul className="p-4">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`${
              selectedTab === tab ? "bg-gray-700 " : ""
            } p-2 hover:bg-gray-600 cursor-pointer rounded`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}
