export const Footer = () => {
  return (
    <div>
      <div class="px-4 py-16 md:py-24 md:px-20 ">
        <div className="flex flex-col gap-8">
          <div class="flex flex-col  justify-center items-center">
            <button class="bg-gray-200 rounded-xl py-1 px-5 mb-4 text-gray-600 ">
              Get in touch
            </button>
            <p className="text-gray-600 text-xl">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex gap-4">
              {" "}
              <img src="/mail.png" />
              <p className="text-gray-900 text-lg font-semibold md:text-4xl">
                tom@pinecone.mn
              </p>
              <img src="/bbj.png" />
            </div>
            <div className="flex gap-4 ">
              <img src="/call.png" />
              <p className="text-gray-900 text-lg font-semibold md:text-4xl">
                {" "}
                +976 88112233
              </p>
              <img src="/bbj.png" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p>You may also find me on these platforms!</p>
            <div className="flex gap-1">
              <img className="py-1.5 px-1.5" src="play.png" />
              <img className="py-1.5 px-1.5" src="shuvuu.png" />
              <img className="py-1.5 px-1.5" src="figma.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-5 gap-2">
        <img src="Png.png" />
        <p> 2024 | Greetings with ❤️️ from Ulaanbaatar</p>
      </div>
    </div>
  );
};
