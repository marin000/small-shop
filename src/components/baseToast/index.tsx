interface BaseToastProps {
  title: string;
  description: string;
}

const BaseToast: React.FC<BaseToastProps> = ({
  title,
  description,
}) => {
  return (
    <div className="gap-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default BaseToast;
