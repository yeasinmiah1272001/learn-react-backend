const Cover = ({ bgImg, title, des }) => {
  return (
    <section
      className="rounded-md p-6 bg-cover bg-fixed hero md:w-[1300px] h-[500px] text-center shadow-lg md:p-12 md:text-left"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="flex justify-center">
        <div className="max-w-3xl">
          <div className="m-4 block rounded-lg bg-opacity-55 bg-slate-800 p-6 shadow-lg ">
            <div className="md:flex md:flex-row">
              <div className="md:ms-6 p-4 text-white md:p-20">
                <h1 className="text-3xl md:text-5xl text-center font-bold">
                  {title}
                </h1>
                <p className="text-center mt-2 text-sm">{des}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
