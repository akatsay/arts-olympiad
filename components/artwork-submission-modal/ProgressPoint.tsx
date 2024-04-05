interface IProps {
  lit: boolean
  title: string
}

export const ProgressPoint = ({lit, title}: IProps) => {
  return (
    <div className={`w-6 h-6 rounded-full border-0.5 border-gray-400 pt-5 ${lit ? "bg-dark-blue" : "bg-white"}`}>
      <p>{title}</p>
    </div>
  );
};