interface CircularProgressProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}
export default function CircularProgress(props: CircularProgressProps) {
  return (
    <div
      className={`text-primary-500 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${props?.className}`}
    >
      {props?.children}
    </div>
  );
}
