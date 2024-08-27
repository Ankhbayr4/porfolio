const Hero = () => {
  return (
    <div className=" flex  gap-12 max-md:flex-col-reverse md:py-24 md:px-20 md:justify-center md:items-center px-4 py-16  gap-x-6 bg-gray-100)">
      <div className=" flex-1  flex flex-col gap-12">
        {" "}
        <div class="flex flex-col gap-6">
          <p class=" h-10 text-4xl md:text-6xl   ">Hi, I’m Tom 👋</p>
          <p class="text-gray-400 font-normal">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>
        <div class="flex flex-col gap-2 ">
          <div class="flex gap-2">
            <img class="w-6 h-6" src="/ub.png" />

            <p class="text-1xl color text-gray-400 ">Ulaanbaatar, Mongolia</p>
          </div>
          <div>
            <div class="flex gap-2 items-center">
              <div className="px-2 py-2">
                <p class="rounded-3xl bg-lime-500 w-2 h-2  "></p>
              </div>

              <p class="text-1xl color text-gray-400 ">
                Available for new project
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <img className="py-1.5 px-1.5" src="play.png" />
          <img className="py-1.5 px-1.5" src="shuvuu.png" />
          <img className="py-1.5 px-1.5" src="figma.png" />
        </div>
      </div>
      <div className="flex-1 flex justify-end items-end max-md:justify-center max-md:items-center">
        {" "}
        <img class=" w-72 h-96 " src="/Pic.png" />
      </div>
    </div>
  );
};
export default Hero;
