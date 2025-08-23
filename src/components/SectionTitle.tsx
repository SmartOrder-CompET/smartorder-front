type Props = {
  title: string;
  onClick: () => void;
};

export const SectionTitle = ({ title, onClick }: Props) => {
  return (
    <div className="flex justify-between mb-3 items-center">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h3>

      <h5
        className="text-primary font-bold cursor-pointer text-sm hover:underline"
        onClick={onClick}
      >
        Ver tudo
      </h5>
    </div>
  );
};
