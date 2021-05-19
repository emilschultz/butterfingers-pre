import Link from "next/link";
import Section from "../components/Section";
import PageTitle from "../components/PageTitle";
import Grid from "../components/Grid";
import CirclesContainer from "../components/CirclesContainer";
import Circle from "../components/Circle";

export default function Home() {
  return (
    <Section className="title-container">
      <CirclesContainer>
        <Circle className="animation">
          <Link href="/lost">
            <a>I lost something</a>
          </Link>
        </Circle>
        <Circle>
          <Link href="/found">
            <a>I found something</a>
          </Link>
        </Circle>
      </CirclesContainer>
    </Section>
  );
}
