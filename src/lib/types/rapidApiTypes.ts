export type Match = {
	league: string;
	date: string;
	time: string;
	status: string; // Adjust based on all possible statuses
	score: string;
	home_name: string;
	home_logo: URL;
	away_name: string;
	away_logo: URL;
	id: string;
};

export type StreamInfo = {
	extra_title: string;
	stream_link: string;
	referer: string;
};
