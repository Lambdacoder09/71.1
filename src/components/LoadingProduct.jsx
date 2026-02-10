function LoadingProduct() {
  return (
    <div className="flex flex-col md:px-8 pb-8">
      <div className="animate-pulse flex md:flex-row flex-col gap-3 bg-white px-4 md:px-8 py-6">
        <div className="bg-gray-200 w-full md:w-1/2 h-80 rounded-lg"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-10 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingProduct;
