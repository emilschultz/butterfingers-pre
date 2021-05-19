import { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";

export default function About() {
  const [jokeData, setJokeData] = useState("");

  useEffect(() => {
    const joke = "https://official-joke-api.appspot.com/random_joke";

    fetch(joke)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setJokeData(data);
      });
  }, []);

  return (
    <>
      <PageTitle>
        Butterfingers give people the chance to recover their lost items by
        believing in the best in others.
      </PageTitle>
      <br />
      <PageTitle>
        But first, here's a joke?: <br /> {jokeData.setup} {jokeData.punchline}
      </PageTitle>
      <br />

      <br />
      <PageTitle>
        ☝️ Usecase 1: <br />
        You lost something, let's say you keys, on your sunday city walk, a
        night out or on your way to the bus. What do you do?
      </PageTitle>
      <br />
      <PageTitle>
        ✌️ Usecase 2:
        <br />
        You find a lost item, let's say some keys, on the street. What do you do
        with them?
      </PageTitle>
      <br />
      <PageTitle>
        👍
        <br />
        Butterfingers lets finders make butterfingered people know that their
        lost item is safe, and where to recover it. In the meantime, the
        butterfingered people can quickly find out where their lost item is.
      </PageTitle>
    </>
  );
}
