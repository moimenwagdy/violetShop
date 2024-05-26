const RatingStarsSVG: React.FC<{
  rating: number;
}> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`h-4 w-4 fill-current ${
          i < rating ? "text-yellow-500" : "text-stone-300"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M19.705 7.712a1 1 0 00-.88-.616l-6.116-.55L10.927.537a1 1 0 00-1.854 0l-1.782 6.01-6.117.55a1 1 0 00-.55 1.705l4.682 3.213-1.782 6.01a1 1 0 001.456 1.054l5.455-3.91 5.454 3.91a1 1 0 001.456-1.054l-1.783-6.01 4.682-3.213a1 1 0 00.255-1.089z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return <div className="flex -space-x-1">{stars}</div>;
};

export default RatingStarsSVG;
