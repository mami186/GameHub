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
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4  p-4">
							{isLoading &&
								skeletons.map((skeleton) => <LoadingSkeleton key={skeleton} />)}
							{data?.pages.map((page, index) => (
								<React.Fragment key={index}>
									{page.results.map((game) => (
										<Link key={game.id} to={`/games/${game.slug}`}>
											<div
												className="flex flex-col w-full h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-in-out  cursor-pointer"
												key={game.id}
											>
												{game.background_image ? (
													<img
														src={MediaResize(game.background_image)}
														alt={game.name}
														className="w-full h-56 sm:h-64 md:h- lg:h-56 xl:h-56 2xl:h-56 object-cover flex-shrink-0"
													/>
												) : (
													<div className="w-full h-56 sm:h-64 md:h-56 lg:h-64 xl:h-56 2xl:h-64 bg-gray-200 flex items-center justify-center flex-shrink-0">
														<span className="text-gray-500">No Image</span>
													</div>
												)}
												<div className="flex flex-col flex-grow p-2">
													<div className="flex items-center justify-between mb-1">
														<div className="text-lg font-semibold line-clamp-2">
															{game.name}
														</div>
														<div className=" opacity-70 rounded px-2 py-1 text-sm text-white font-medium ml-2 flex-shrink-0">
															{game.rating}
														</div>
													</div>
													<div className="mt-auto">
														<PlatformIcons
															platforms={
																game.parent_platforms?.map((p) => p.platform) ||
																[]
															}
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
