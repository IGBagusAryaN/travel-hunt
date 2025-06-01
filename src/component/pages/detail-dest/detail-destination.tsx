
export const DetailDestination = () => {
  return (
    <div className="">
      <div className="pt-32">
        <div className="grid grid-cols-2 px-2 gap-5">
          <div>
            <div className="relative">
              <div className="font-semibold text-[24px]">
                Nusa Penida
              </div>
              <div className="text-gray-600 mb-3 flex gap-3 text-[14px] items-center mt-2">
          
                <div className="flex gap-2  items-center">Category :  <div  className="text-xs text-center bg-blue-100 text-[#4B83FE] px-2 py-1 rounded-md font-medium">
                    Island
                </div>
                <div>
                  Location : Bali - Indonesia
                </div>
                </div>
              </div>
            </div>
            <p className="text-gray-500 whitespace-pre-line text-justify">
              {`Nusa Penida is a breathtaking island located southeast of Bali, Indonesia, renowned for its dramatic coastal cliffs, crystal-clear turquoise waters, and pristine natural beauty. As the largest of the three Nusa Islands, Nusa Penida offers a more untouched and rugged landscape compared to its more developed neighbors.

                The island is famous for its iconic Kelingking Beach, where towering limestone cliffs form a unique T-Rex-shaped formation overlooking a secluded white sand beach. Another must-see is Angel’s Billabong, a natural infinity pool carved into the coastal rock, and the nearby Broken Beach, a circular cove with a natural archway where waves crash through spectacularly.

                Visitors can also explore Atuh Beach, with its striking rock formations and tranquil atmosphere, or hike to Peguyangan Waterfall via a steep blue stairway clinging to a cliffside.`}
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-3 max-w-xl mx-auto mt-19">
    
              <div className="grid grid-rows-2 gap-3">
                <img
                  src="https://i0.wp.com/labirutour.com/wp-content/uploads/2023/02/Credit-Hotel.webp?fit=800%2C533&ssl=1"
                  alt="Gambar 1"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="https://theworldtravelguy.com/wp-content/uploads/2020/03/DSCF2343-2.jpg"
                  alt="Gambar 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="row-span-2">
                <img
                  src="https://images.pexels.com/photos/2583832/pexels-photo-2583832.jpeg?cs=srgb&dl=pexels-stijn-dijkstra-1306815-2583832.jpg&fm=jpg"
                  alt="Gambar 3"
                  className="w-full h-[96.5%] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
