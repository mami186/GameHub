const LoadingSkeleton = () => {
	return (
			<div className="flex flex-col flex-auto min-w-64 max-w-72 bg-white rounded-lg overflow-hidden shadow-2xl m-1 mb-2 ">
				<div className="bg-gray-300 dark:bg-gray-700 h-48  animate-pulse rounded" />
				<div className="flex flex-col space-y-2">
					<div className="flex items-center justify-between px-3 py-2 h-auto">
						<div className="bg-gray-300 dark:bg-gray-700 h-3 w-34 animate-pulse rounded"></div>
						<div className="bg-gray-300 dark:bg-gray-700 h-4 w-7 animate-pulse rounded"></div>
					</div>
					<div className="mx-3 mb-2 bg-gray-300 dark:bg-gray-700 h-3 w-24 animate-pulse rounded"></div>
				</div>
			</div>
	);
};

export default LoadingSkeleton;
