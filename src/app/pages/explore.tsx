import React from "react";
import ProfileCard from "../_components/ProfileCard";

const Explore: React.FC = () => {
  const profiles = [
    {
      id: 1,
      title: "Chambre lumineuse à Paris",
      description: "Une chambre en colocation proche du centre-ville.",
      image: "/example.jpg",
      location: "Paris, France",
    },
    {
      id: 2,
      title: "Studio moderne à Lyon",
      description: "Un studio spacieux et moderne à partager.",
      image: "/example2.jpg",
      location: "Lyon, France",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          title={profile.title}
          description={profile.description}
          image={profile.image}
          location={profile.location}
        />
      ))}
    </div>
  );
};

export default Explore;
