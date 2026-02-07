interface Props {
  title: string;
  description?: string;
}

export default function EmptyState({ title, description }: Props) {
  return (
    <div className="text-center mt-12 text-gray-500">
      <p className="text-lg font-medium">{title}</p>
      {description && (
        <p className="text-sm mt-1">{description}</p>
      )}
    </div>
  );
}
