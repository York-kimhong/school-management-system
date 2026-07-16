type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div
      className="
bg-white/70

backdrop-blur-xl

border

border-white/50

rounded-3xl

shadow-xl

p-6

"
    >
      {children}
    </div>
  );
}
