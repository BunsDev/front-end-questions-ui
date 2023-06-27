import Head from "next/head";

import { DynamicQuestionList } from "@/components/questions/QuestionList";
import { accessibilityQuestionsData } from "@/questionsData/accessibilityQuestions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accessibility</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicQuestionList
        questions={accessibilityQuestionsData}
        tech="Accessibility"
      />
    </>
  );
}
