import "./App.css";

import "./components/ActivityButton";
import ActivityButton from "./components/ActivityButton";

function App() {
  const activities = [
    {
      id: 1,
      name: "Beach Visit",
      description: "A day at the beach with sun and bathing.",
    },
    {
      id: 2,
      name: "Fishing",
      description: "Relaxing fishing at a beautiful lake.",
    },
    {
      id: 3,
      name: "Hiking",
      description: "A scenic hiking trip in the mountains.",
    },
    { id: 4, name: "Picnic", description: "A lovely picnic in the park." },
    {
      id: 5,
      name: "Cycling",
      description: "A bicycle ride through the countryside.",
    },
    {
      id: 6,
      name: "Outdoor Yoga",
      description: "A session of yoga in a tranquil outdoor setting.",
    },
    { id: 7, name: "Kayaking", description: "Paddling through serene waters." },
    {
      id: 8,
      name: "Star Gazing",
      description: "Observing the stars on a clear night.",
    },
    {
      id: 9,
      name: "Bird Watching",
      description: "Discovering local bird species in their natural habitats.",
    },
    {
      id: 10,
      name: "Gardening",
      description: "Spending the day tending to a garden.",
    },
  ];

  return (
    <div>
      {activities.map((activity) => (
        <ActivityButton
          buttonObject={activity}
          queryDocument={"#activity-display"}
        />
      ))}
      <div id="activity-display">
        <p>Choose an activity to display information.</p>
      </div>
    </div>
  );
}

export default App;
