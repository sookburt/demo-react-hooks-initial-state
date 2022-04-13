import { sleep } from "../shared/functions";
import IJoke from "./joke.interface";

export default async function loadJoke() : Promise<IJoke> {

  const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=twopart&safe-mode');

  // slow down load so we can see the refresh.
  await sleep(2000);

  if(response.ok) {
    const result = await response.json();
    return {setup: result.setup, delivery: result.delivery };
  }

  // poor error handling but only for a demo for now.
  return { setup: 'Error', delivery: 'Error' };
}