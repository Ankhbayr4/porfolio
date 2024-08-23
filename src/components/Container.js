const Container = () => {
  return (
    <div class="px-4 py-16 bg-gray-50">
      <div class="flex  justify-center items-center mb-8">
        <button class="bg-gray-400 rounded-xl w-24 h-7  ">About me</button>
      </div>
      <img class="flex justify-center m-auto mb-12" src="/zurag.png" />
      <div class="">
        <div class="flex flex-col gap-10">
          <p className="text-gray-900 text-2xl">
            {" "}
            Curious about me? Here you have it:
          </p>
          <p className="text-gray-600 text-base font-normal">
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </p>
          <p className="text-gray-600 text-base font-normal">
            Since starting my web development journey in 2015, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </p>
          <p className="text-gray-600 text-base font-normal">
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </p>
          <p className="text-gray-600 text-base font-normal">
            Finally, some quick bits about me.
          </p>
          <div class="">
            <li className="text-gray-600 text-base font-normal">
              B.E. in Computer Engineering
            </li>
            <li className="text-gray-600 text-base font-normal">
              Avid learner
            </li>
            <li className="text-gray-600 text-base font-normal">
              Full time freelancer
            </li>
          </div>
          <p className="text-gray-600 text-base font-normal">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
export default Container;
