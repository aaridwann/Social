import React from 'react'

export default function CardProfile() {
    return (
        <div>
             <div className="flex flex-col fixed left-auto ">
          {/* 1 */}
          <div className="bg-mathca p-4 rounded-tr-extra rounded-bl-extra h-48 flex items-center justify-center">
            <figure className="rounded-full overflow-hidden w-40 h-40">
              <img src="./assets/img/Avatar.jpg" alt="ava" />
            </figure>
          </div>
          {/* 2 */}
          <div className="flex flex-row gap-8 justify-center items-center bg-mathca h-28 rounded-br-extraLG rounded-tl-extra rounded-bl-extraLG">
            <div className="flex-col flex justify-center items-center">
              <button className="py-1 text-2xl px-8 rounded-extraLG  bg-white font-bold text-matcha-dark">
                5.M
              </button>
              <p className="text-lg font-bold text-gray-700">Followers</p>
            </div>

            <div className="flex-col flex justify-center items-center">
              <button className="py-1 text-2xl px-8 rounded-extraLG bg-white font-bold text-gray-600">
                100
              </button>
              <p className="text-lg font-bold text-gray-700">Following</p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-row gap-5 justify-center items-center bg-matcha-dark h-28 rounded-tl-extraLG rounded-r-extraLG ">
            <div className="flex-col flex justify-center items-center">
              <button className="py-1 text-lg px-4 rounded-extraLG bg-white font-bold text-gray-600">
                5.9M
              </button>
              <p className="text-lg font-bold text-gray-700">Posts</p>
            </div>
            <div className="flex-col flex justify-center items-center">
              <button className="py-1 text-lg px-4 rounded-extraLG bg-white font-bold text-gray-600">
                100
              </button>
              <p className="text-lg font-bold text-gray-700">Project</p>
            </div>
            <div className="flex-col flex justify-center items-center">
              <button className="py-1 text-lg px-4 rounded-extraLG bg-white font-bold text-gray-600">
                8,5/10
              </button>
              <p className="text-lg font-bold text-gray-700">Ratings</p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex flex-col mx-auto justify-center items-center mt-10 text-gray-100 ">
            <h1 className=" font-bold text-3xl uppercase mb-4">
              Ridwan Firmansyah
            </h1>
            <h3 className=" font-bold text-xl">Front End Developer</h3>
            <h5 className=" font-bold text-md">Jakarta, Indonesia</h5>
          </div>
        </div>
        </div>
    )
}
