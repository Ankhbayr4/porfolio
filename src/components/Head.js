const Head = () => {
  return (
    <div>
      <div class="  flex justify-between md:py-4 md:px-20 px-4 py-4">
        <p class="text-3xl">TOM</p>
        <img className="md:hidden" src="/icon.png" />
        <div className=" max-md:hidden flex gap-6 justify-center items-center">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <border class="border border-solid h-6"></border>
          <div className="flex gap-4">
            <img src="/Icon Button.png" />

            <button className="py-1.5 rounded-xl px-4 text-gray-100 bg-gray-900">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Head;
