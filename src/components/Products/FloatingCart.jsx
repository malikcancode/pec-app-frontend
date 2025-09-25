export default function FloatingCart() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-sm px-4">
      <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-between transition-colors shadow-lg">
        <span>View your cart</span>
        <div className="flex items-center gap-2">
          <span className="bg-white text-green-500 px-2 py-1 rounded-full text-sm font-bold">
            3x
          </span>
          <span className="font-bold">$256.00</span>
        </div>
      </button>
      <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mt-2"></div>
    </div>
  );
}
