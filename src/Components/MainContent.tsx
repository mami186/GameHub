import MediaResize from "./MediaResize";
import useGames from "../hooks/useGames";
import LoadingSkeleton from "./LoadingSkeleton";
import PlatformIcons from "./PlatformIcons";
import * as React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameHeading from "./GameHeading";
import PlatformSelector from "./PlatformSelector";
import SIdebar from "./SIdebar";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
	const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const gameCount = data.pages.reduce(
		(total, page) => total + page.results.length,
		0
	);

	return (
		<>
			<div className="relative">
				{isMobileMenuOpen && (
					<div
						className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
						onClick={() => setIsMobileMenuOpen(false)}
					/>
				)}

				{/* Mobile Sidebar */}
				<div
					className={`fixed top-0 left-0 h-full w-64 bg-white   z-50 transform transition-transform duration-300 md:hidden ${
						isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<div className="p-4">
						<button
							onClick={() => setIsMobileMenuOpen(false)}
							className="mb-4 text-2xl"
						>
							×
						</button>
						<SIdebar />
					</div>
				</div>

				<InfiniteScroll
					dataLength={gameCount}
					hasMore={hasNextPage}
					next={() => fetchNextPage()}
					loader={<p>Loading...</p>}
				>
					{" "}
					<div className="flex flex-col">
						<GameHeading />
						<PlatformSelector />
					</div>
					{error && <p>{error.message}</p>}
					<div className="flex flex-auto">
						<div className="flex flex-wrap justify-evenly px-2 sm:px-0 ">
							{isLoading &&
								skeletons.map((skeleton) => <LoadingSkeleton key={skeleton} />)}
							{data?.pages.map((page, index) => (
								<React.Fragment key={index}>
									{page.results.map((game) => (
										<Link to={`/games`}>
										<div 
											className={
												"flex flex-col flex-auto  sm:w-72 sm:max-w-96  rounded-lg overflow-hidden shadow-2xl  m-1 mb-2 "
											}
											key={game.id}
										>
											{game.background_image ? (
												<img
													src={MediaResize(game.background_image)}
													alt={game.name}
												/>
											) : (
												<div className="w-full h-58 bg-gray-200 flex items-center justify-center">
													<span className="text-gray-500">No Image</span>
												</div>
											)}
											<div className="flex flex-col">
												<div className="flex items-center justify-between px-3 py-2 h-auto">
													<div>{game.name}</div>
													<div className="bg-gray-500 opacity-70 rounded p-0 text-center">
														{game.rating}
													</div>
												</div>
												<div className="px-3 pb-2">
													<PlatformIcons
														platforms={game.parent_platforms?.map(
															(p) => p.platform
														) || []}
													/>
												</div>
											</div>
										</div>
										</Link>
									))}
								</React.Fragment>
							))}
						</div>
					</div>
				</InfiniteScroll>
			</div>
		</>
	);
};

export default MainContent;
