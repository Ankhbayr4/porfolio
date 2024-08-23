export const Footer = () => {
  return (
    <div>
      <div class="px-4 py-16 grid gap-x-6">
        <div class="flex flex-col  justify-center items-center">
          <button class="bg-gray-400 rounded-xl w-24 h-7  ">About me</button>
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="flex gap-4">
          {" "}
          <img src="/mail.png" />
          <p>tom@pinecone.mn</p>
          <img src="/bbj.png" />
        </div>
      </div>
    </div>
  );
};
