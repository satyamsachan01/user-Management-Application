export default function SkeletonUserList() {
  return (
    <div className="w-full space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-12 bg-gray-200 animate-pulse rounded"></div>
      ))}
    </div>
  );
}
