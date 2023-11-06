import loved from './../assets/main.jpeg'

const Card = () => {
  return (
    <>
      <a
        href="#"
        className="flex flex-col  p-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={loved}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal gap-2 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            className="w-4/12 inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Details
          </a>
        </div>
      </a>
    </>
  );
};

export default Card;
