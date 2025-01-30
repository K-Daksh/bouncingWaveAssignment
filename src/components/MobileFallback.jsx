const MobileFallback = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#FDFBF7] p-6">
      <div className="text-center">
        <h1 className="text-[#334155] text-2xl font-bold mb-4 font-['Jura']">
          Please open on a PC
        </h1>
        <p className="text-[#334155] text-lg font-['Jura']">
          This experience contains 3D content that's best viewed on a larger
          screen.
        </p>
      </div>
    </div>
  );
};

export default MobileFallback; // Add this line to export the component
