import IJoke from "./joke.interface";

const JokeDisplay: React.FC<{ joke: IJoke }> = ({joke}) => {
 return (
  <>
			<div className='text-primary font-bold text-2xl'>{ joke.setup }</div>
			<div className='text-primary text-2xl'>{ joke.delivery }</div>
  </>

 );
}

export default JokeDisplay;