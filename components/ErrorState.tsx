interface Props {
  message: string;
}

export default function ErrorState({ message }: Props) {
  return (
    <div className="text-center mt-8 text-red-500">
      <p className="font-medium">Something went wrong</p>
      <p className="text-sm mt-1">{message}</p>
    </div>
  );
}
