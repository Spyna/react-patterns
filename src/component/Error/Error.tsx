interface ErrorProps {
  message?: string;
}
export default function Error({
  message = "An unexpected error occurred",
}: ErrorProps) {
  return <div className="error">{message}</div>;
}
