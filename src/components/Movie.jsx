const Movie = ({ movie }) => {
    const {id, title, overview, vote_average, poster_path} = movie;
    
    return (
        <>
            <div className="max-w-xs bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl" key={id}>
                <img className="w-full h-60 object-cover" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Movie Poster" />

                <div className="p-4">
                    <h2 className="text-xl font-semibold text-white mb-2 truncate">{title}</h2>

                    <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L17.9 21 12 17.27 6.1 21l1.9-6.86-5-4.87 6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-gray-400 ml-1">{vote_average?.toFixed(1)}/10</span>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{overview}</p>

                    <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md w-full transition duration-200 hover:bg-indigo-600 focus:outline-none">
                        View Details
                    </button>
                </div>
            </div>
        </>
    )

}

export default Movie;