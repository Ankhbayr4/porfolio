export const Work = () => {
  return (
    <div>
      <div class="md:py-24 md:px-20 px-4 py-16 rounded-2xl mb-8 bg-gray-50">
        <div class="flex  justify-center items-center">
          <button class="bg-gray-200 rounded-xl py-1 px-5  text-gray-600 ">
            Work
          </button>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <p className="text-gray-600 text-lg mt-4 justify-center items-center">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div className="flex max-md:grid">
          <div className="flex-1">
            <img className="m-auto py-14" src="/Column.png" />
          </div>

          <div className="flex-1 flex flex-col gap-10 py-8 px-8">
            <p className="text-gray-900 text-lg">UBCab</p>
            <p className="text-gray-600 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className=" flex flex-wrap gap-4">
              <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
                React
              </button>
              <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
                Next.js
              </button>
              <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
                Typescript
              </button>
              <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
                Nest.js
              </button>
              <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
                PostgreSQL
              </button>
              <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
                Tailwindcss
              </button>
              <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
                Figma
              </button>
              <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
                Cypress
              </button>
              <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
                Storybook
              </button>
              <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
                Git
              </button>
            </div>
            <div>
              {" "}
              <img src="/hiiiii.png" />
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 py-16 rounded-2xl mb-8 bg-gray-50">
        <img className="m-auto py-14" src="/COL.png" />
        <div className="flex  flex-col gap-10 py-8 px-8">
          <p className="text-gray-900 text-lg">Mentorhub</p>
          <p className="text-gray-600 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className=" flex flex-wrap gap-2">
            <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
              React
            </button>
            <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
              Next.js
            </button>
            <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
              Typescript
            </button>
            <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
              Nest.js
            </button>
            <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
              PostgreSQL
            </button>
            <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
              Tailwindcss
            </button>
            <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
              Figma
            </button>
            <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
              Cypress
            </button>
            <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
              Storybook
            </button>
            <button className="text-gray-600 bg-gray-200 rounded-2xl px-5 py-1">
              Git
            </button>
          </div>
          <div>
            {" "}
            <img src="/hiiiii.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
