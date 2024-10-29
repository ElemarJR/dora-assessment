"use client";

import { useAssessment } from "@/store/AssessmentContext";
import { assessmentData } from "@/data/assessment";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function QuestionPage({ params }: { params: { id: string } }) {
  const { state, dispatch } = useAssessment();
  const router = useRouter();

  if (params.id === "welcome") {
    return (
      <div className="w-full text-center">
        <h1 className="text-3xl font-bold mb-8">Bem-vindo à Avaliação</h1>
        <p className="mb-8">Esta avaliação ajudará a medir a maturidade dos processos em sua organização.</p>
        <Link
          href="/question/S1Q1"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Começar Avaliação
        </Link>
      </div>
    );
  }

  if (params.id === "thankyou") {
    const unansweredQuestions = assessmentData.flatMap((section, sIndex) =>
      section.questions.filter((q) => !state.answers[q.id]).map((q) => ({
        section,
        question: q,
        link: `S${sIndex + 1}Q${section.questions.findIndex((sq) => sq.id === q.id) + 1}`
      }))
    );

    return (
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Obrigado por participar!</h1>
        
        {unansweredQuestions.length > 0 ? (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Questões não respondidas:</h2>
            <ul className="space-y-2">
              {unansweredQuestions.map(({ section, question, link }) => (
                <li key={question.id}>
                  <Link
                    href={`/question/${link}`}
                    className="text-blue-600 hover:underline"
                  >
                    {section.title} - {question.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-6">Todas as questões foram respondidas!</p>
            <button
              onClick={() => {
                // Implementar lógica de envio aqui
                console.log("Enviando respostas:", state.answers);
              }}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Enviar Avaliação
            </button>
          </div>
        )}
      </div>
    );
  }

  const match = params.id.match(/^S(\d+)Q(\d+)$/);
  if (!match) return <div>Questão não encontrada</div>;

  const [_, sectionIndex, questionIndex] = match;
  const currentSection = assessmentData[Number(sectionIndex) - 1];
  const currentQuestion = currentSection?.questions[Number(questionIndex) - 1];

  if (!currentQuestion) return <div>Questão não encontrada</div>;

  const progress = calculateProgress(
    Number(sectionIndex) - 1,
    Number(questionIndex) - 1
  );

  const isFirstQuestion =
    Number(sectionIndex) === 1 && Number(questionIndex) === 1;
  const isLastQuestion =
    Number(sectionIndex) === assessmentData.length &&
    Number(questionIndex) === currentSection.questions.length;

  const handlePrevious = () => {
    if (isFirstQuestion) {
      router.push('/question/welcome');
      return;
    }

    let prevQuestionIndex = Number(questionIndex) - 1;
    let prevSectionIndex = Number(sectionIndex);

    if (prevQuestionIndex < 1) {
      prevSectionIndex--;
      prevQuestionIndex = assessmentData[prevSectionIndex - 1].questions.length;
    }

    router.push(`/question/S${prevSectionIndex}Q${prevQuestionIndex}`);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      router.push('/question/thankyou');
      return;
    }

    let nextQuestionIndex = Number(questionIndex) + 1;
    let nextSectionIndex = Number(sectionIndex);

    if (nextQuestionIndex > currentSection.questions.length) {
      nextSectionIndex++;
      nextQuestionIndex = 1;
    }

    router.push(`/question/S${nextSectionIndex}Q${nextQuestionIndex}`);
  };

  // Preserva a resposta ao navegar
  useEffect(() => {
    const currentAnswer = state.answers[`${currentQuestion.id}`];
    if (currentAnswer) {
      dispatch({
        type: "ANSWER_QUESTION",
        payload: {
          questionKey: `${currentQuestion.id}`,
          value: currentAnswer,
        },
      });
    }
  }, [currentQuestion.id]);

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="mb-4">
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            disabled={false}
            className={`w-10 h-10 rounded-full border transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700`}
            aria-label="Voltar para questão anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14 16l-4-4 4-4" />
            </svg>
          </button>
          <h3 className="text-lg font-geist-sans font-semibold">
            {currentSection.title.toUpperCase()}
          </h3>
          <h4 className="text-base font-geist-sans font-medium">
            {currentQuestion.title.toUpperCase()}
          </h4>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <p className="text-lg font-geist-sans">{currentQuestion.text}</p>
        <div className="relative group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500 cursor-help"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            {currentQuestion.description}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {currentQuestion.options.map((option) => (
          <label
            key={option.value}
            className="flex items-start p-4 rounded-lg border cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-geist-sans"
          >
            <input
              type="radio"
              name="answer"
              value={option.value}
              checked={state.answers[`${currentQuestion.id}`] === option.value}
              onChange={() => {
                dispatch({
                  type: "ANSWER_QUESTION",
                  payload: {
                    questionKey: `${currentQuestion.id}`,
                    value: option.value,
                  },
                });
                if (!isLastQuestion) {
                  handleNext();
                }
              }}
              className="mt-1 mr-4"
            />
            <span>{option.text}</span>
          </label>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <button
          onClick={() => {
            if (isLastQuestion) {
              router.push('/question/thankyou');
            } else {
              handleNext();
            }
          }}
          className={`w-10 h-10 rounded-full border transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700`}
          aria-label="Ir para próxima questão"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M10 8l4 4-4 4" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function calculateProgress(
  sectionIndex: number,
  questionIndex: number
): number {
  let totalQuestions = 0;
  let completedQuestions = 0;

  // Calcula o total de questões
  assessmentData.forEach((section) => {
    totalQuestions += section.questions.length;
  });

  // Calcula quantas questões já foram completadas
  for (let s = 0; s < assessmentData.length; s++) {
    if (s < sectionIndex) {
      // Adiciona todas as questões das seções anteriores
      completedQuestions += assessmentData[s].questions.length;
    } else if (s === sectionIndex) {
      // Adiciona as questões até o índice atual na seção atual
      completedQuestions += questionIndex + 1;
    }
  }

  return Math.round((completedQuestions / totalQuestions) * 100);
}
