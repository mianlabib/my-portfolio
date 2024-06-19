export default function Home() {
  return (
    <>
    <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Products
        </h1>
      </div>
      <div className="px-7 py-7 flex flex-col flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3">
        <div className="flex flex-col gap-y-4">
          <p className="text-lg text-gray-500 text-center md:text-justify font-normal tracking-tigh">
          We are pleased to infom you that we will be launching our latest products here very soon. Please stay tuned for updates...
          </p>
        </div>
      </div>
    </>
  );
}
