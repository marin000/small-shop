import React from 'react';

interface ProfileDetailProps {
  label: string;
  value: string | number;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({
  label,
  value,
}) => {
  return (
    <li className="items-center text-lg">
      <strong className="text-gray-700 mr-4">{label}:</strong>
      <span className="text-gray-900">{value}</span>
    </li>
  );
};

export default ProfileDetail;
