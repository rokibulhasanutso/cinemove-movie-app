import { FaStar } from "react-icons/fa6";

const Rating = ({rating}) => {

	console.log(`Rating: ${rating}`);

	return (
		<div  className="flex gap-1 py-4 items-center text-base">
		<span className="text-lg font-bold me-4">{`Rating: (${(rating).toFixed(1)})`}</span>
		{
			Array.from({length: 10}).map((_, i) => (
				<FaStar 
					key={i} 
					className={rating > i ? 'text-yellow-400' : 'text-gray-300'}
				/>
			))
		}
		</div>
	);
};

export default Rating;