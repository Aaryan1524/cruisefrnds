export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-[#313338] text-white">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
        Welcome to CruiseFrnds
      </h1>
      <p className="text-gray-400 max-w-md text-lg">
        The premier social platform for cruise enthusiasts.
        Select a Cruise Line from the left sidebar to get started.
      </p>

      <div className="mt-8 p-4 bg-[#2B2D31] rounded-lg border border-[#1F2023] max-w-xs w-full">
        <div className="text-sm font-bold text-gray-500 uppercase mb-2">Prototype Mode</div>
        <p className="text-xs text-gray-400">
          Navigate to <strong>Royal Caribbean</strong> or <strong>Carnival</strong> to see the hierarchy in action.
        </p>
      </div>
    </div>
  );
}
