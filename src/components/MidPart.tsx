export default function MidPart() {
  return (
    <>
      <div className="h-full bg-stone-950 mx-1 lg:w-2/4 md:w-3/4 sm:w-full rounded-lg flex flex-col">
        <div className="relative">
          <img
            className="opacity-10 w-full h-full object-cover"
            src="https://png.pngtree.com/background/20220729/original/pngtree-programming-and-coding-banner-working-picture-image_1862296.jpg"
            alt="background"
          />
          <img
            className="rounded-full absolute lg:bottom-24 md:bottom-16 sm:bottom-10 lg:left-14 md:left-10 sm:left-5 lg:w-72 md:w-48 sm:w-32"
            src="https://www.imprentaonline.net/blog/wp-content/uploads/DALL%C2%B7E-2023-10-16-10.41.49-Illustration-depicting-a-humanoid-robot-with-half-of-its-face-transparent-revealing-intricate-circuits-and-gears-inside.-The-robot-is-holding-a-light-1.png"
            alt="profile"
          />
          <p className="text-slate-100 font-sans lg:text-6xl md:text-4xl sm:text-2xl font-bold absolute lg:bottom-9 md:bottom-6 sm:bottom-4 lg:left-20 md:left-14 sm:left-10">
            John Vasquez
          </p>
          <p className="text-slate-100 font-sans font-medium absolute lg:bottom-1 md:bottom-1 sm:bottom-0 lg:left-20 md:left-14 sm:left-10">
            Frontend Developer
          </p>
        </div>
        <div className="h-full bg-gradient-to-t from-stone-950 via-stone-950 to-yellow-800"></div>
      </div>
    </>
  );
}
