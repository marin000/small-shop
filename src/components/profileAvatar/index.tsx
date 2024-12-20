import { UserCircleIcon } from '@heroicons/react/24/outline';

interface ProfileAvatarProps {
  image?: string;
  size?: number;
  onClick?: () => void;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  image,
  size = 40,
  onClick,
}) => {
  return (
    <div
      className="relative flex items-center justify-center rounded-full overflow-hidden"
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      {image ? (
        <img
          src={image}
          alt="User avatar"
          className="w-full h-full object-cover"
        />
      ) : (
        <UserCircleIcon
          className="text-gray-500"
          style={{ width: size, height: size }}
        />
      )}
    </div>
  );
};

export default ProfileAvatar;
