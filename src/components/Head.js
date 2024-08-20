import Head from "next/head";
function Head() {
  return (
    <div class="w-96 h-16 flex items-center justify-center">
      <div class="flex justify-between h-9 w-80 flex justify-items-center ">
        <p class="text-3xl">TOM</p>
        <img src="/icon.png" />
      </div>
    </div>
  );
}
export default Head;
