import { useEffect, useRef } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { useSelector } from "react-redux";
import Rating from "../../../components/common/Rating";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

const HeroCarousel = () => {
	const carouselRef = useRef()
	const { backdrop } = useSelector((state) => state.home.url)
	const {data} = useFetchData('/movie/upcoming')

	useEffect(() => {
		const carousel = carouselRef.current

		const nextDom = carousel.querySelector('#next');
		const prevDom = carousel.querySelector('#prev');

		const carouselDom = carousel.querySelector('.carousel');
		const SliderDom = carouselDom.querySelector('.carousel .list');
		const thumbnailBorderDom = carousel.querySelector('.carousel .thumbnail');

		const timeRunning = 300;
		const timeAutoNext = 7000;

		nextDom.onclick = () => {
			showSlider('next');
		}

		prevDom.onclick = () => {
			showSlider('prev');    
		}

		let runTimeOut;
		let runNextAuto = setTimeout(() => {
			nextDom.click();
		}, timeAutoNext)

		const showSlider = (type) => {
			const  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
			const thumbnailItemsDom = carousel.querySelectorAll('.carousel .thumbnail .item');
			
			if(type === 'next'){
				SliderDom.appendChild(SliderItemsDom[0]);
				thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
				carouselDom.classList.add('next');
			}else{
				SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
				thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
				carouselDom.classList.add('prev');
			}
			clearTimeout(runTimeOut);
			runTimeOut = setTimeout(() => {
				carouselDom.classList.remove('next');
				carouselDom.classList.remove('prev');
			}, timeRunning);

			clearTimeout(runNextAuto);
			runNextAuto = setTimeout(() => {
				nextDom.click();
			}, timeAutoNext)
		}

		return () => {
			clearTimeout(runTimeOut);
			clearTimeout(runNextAuto);
		}
	}, [])

	data?.results?.slice(1)

	return (
		<div ref={carouselRef}>
			<div className="carousel">
				{/* <!-- list item --> */}
				<div className="list">
					{data?.results?.map((data, index) => (
						<div key={index} className="item">
							<div className="bg-image">
								<img src={backdrop + data.backdrop_path}/>
								<div className="image-shadow"/>
							</div>
							<div className="content">
								<div className="author">Upcomming</div>
								<div className="title">{data.title}</div>
								<div className="ratting">
									<Rating rating={data.vote_average}/>
								</div>
								<div className="des line-clamp-4">{data.overview}</div>
								<button className="buttons relative group/playbutton">
									<span className="pe-4">Watch trailer</span>

									<span className="play">
										<span className="relative z-[1] group-hover/playbutton:text-yellow-700 text-yellow-400"><FaPlay className="text-2xl"/></span>
										<span className="group-hover/playbutton:animate-none animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
									</span>
								</button>
							</div>
						</div>
					))}
				</div>

				{/* <!-- list thumnail --> */}
				<div className="thumbnail">
					{data?.results?.map((_, index, arr) => {
						const data = index === (arr.length - 1) ? arr[0] : arr[index + 1]

						return <div key={index} className="item">
							<img src={backdrop + data?.backdrop_path}/>
							<div className="content">
								<div className="title">
									{data.title}
								</div>
								<div className="description line-clamp-1">
									{data.overview}
								</div>
							</div>
						</div>
					})}
				</div>
				{/* <!-- next prev --> */}
				<div className="arrows">
					<button id="prev"><IoIosArrowBack/></button>
					<button id="next"><IoIosArrowForward/></button>
				</div>
				{/* <!-- time running --> */}
				{/* <div className="time"></div> */}
			</div>
		</div>
	);
};

export default HeroCarousel;