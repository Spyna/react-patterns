interface LoadingProps {
  text?: string;
}
export default function Loading({ text = "Loading" }: LoadingProps) {
  return <div>{text}</div>;
}
