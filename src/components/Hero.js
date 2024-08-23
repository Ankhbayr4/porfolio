const Hero = () => {
  return (
    <div
      class="px-4 py-16 grid gap-x-6 bg-gray-100);
"
    >
      <div class="flex ">
        <img class=" m-auto" src="/Pic.png" />
      </div>
      <p class=" h-10 text-4xl mt-12 ">Hi, I’m Tom 👋</p>
      <p class="text-gray-400">
        I specialize in full stack development, particularly with React.js and
        Node.js. My main goal is to create exceptional digital experiences that
        are fast, visually appealing, and accessible to everyone. With over 7
        years of experience in web development, I continue to find joy in
        crafting innovative solutions and designs.
      </p>
      <div class="flex mt-12 ">
        <img class="mr-2" src="/pcon.png" />

        <p class="text-1xl color text-gray-400 ">Ulaanbaatar, Mongolia</p>
      </div>
      <div class="flex mt-2 ">
        <div class="flex justify-center items-center">
          <p class="rounded-3xl bg-lime-500 w-2 h-2 mr-2 "></p>
          <p class="text-1xl color text-gray-400 ">Available for new project</p>
        </div>
      </div>
      <div class="flex gap-2 mt-12">
        <img src="/vector.png" />
        <img src="/Vector.png" />
        <img src="/tiii.png" />
      </div>
    </div>
  );
};
export default Hero;
