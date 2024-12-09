import React from "react";
import Image from 'next/image';

interface ProfileCardProps {
  title: string;
  description: string;
  image: string;
  location: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, description, image, location }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image
        src={image}
        alt={title}
        layout="responsive"
        className="rounded-md w-full h-48 object-cover"
        />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-sm text-gray-500">{location}</p>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};

export default ProfileCard;
