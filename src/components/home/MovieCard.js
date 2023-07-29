import Image from "next/image";

export default function MovieCard({ movie }) {
  function handleClick() {
    window.location.href = `/movies/${movie._id}`;
  }

  return (
    <div
      className="card bg-base-100 shadow-md shadow-slate-600 hover:cursor-pointer"
      onClick={handleClick}
    >
      <figure className="relative">
        <Image
          src={`${movie.poster_url}`}
          alt={`${movie.title}`}
          width={150}
          height={300}
          layout="responsive"
        />
        <div className="badge bg-indigo-500 font-bold text-black absolute bottom-0 right-0 rounded-r-none">
          {movie.age_rating}+
        </div>
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-base md:text-lg">{movie.title}</h2>
        <div className="mt-auto w-full flex">
          <span className="bg-indigo-500 rounded-xl text-black px-4 py-1 ml-auto">
            Rp{movie.ticket_price.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    </div>
  );
}
