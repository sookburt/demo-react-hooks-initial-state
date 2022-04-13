import { useEffect, useState } from "react";
import LoadingIndicator from "../shared/loading_indicator";
import IJoke from "./joke.interface";
import JokeDisplay from "./joke_display";
import loadJoke from "./load_joke";

const Joke: React.FC = () => {

	const [loading, setLoading] = useState(false);

	const [ joke, setJoke ] = useState<IJoke>();

	const shouldLoad = (joke === undefined && !loading);

	// only want this to run once.
	useEffect(() => {
		const performFetch = async() => {
			// allows us to call the loadJoke async because can't do it directly within useEffect.
			if (loading) return;
			setLoading(true);
			const loadedJoke = await loadJoke();
			setJoke(loadedJoke);
			setLoading(false);
		}
		if(shouldLoad){
			performFetch();
		}
	}, [shouldLoad, loading]);
	
	return(
		<article className='mt-3 text-center'>
			{ loading && <LoadingIndicator/> }
			{ !loading && joke && <JokeDisplay joke={joke} />}
			{ !loading && <button className='button mt-6 p-3 bg-success text-white'
					onClick={() => setJoke(undefined)}>
							New Joke
				</button>}
		</article>
)};


export default Joke;