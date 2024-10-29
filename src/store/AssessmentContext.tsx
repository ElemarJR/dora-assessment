import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AssessmentState } from '../types/assessment';
import { assessmentData } from '../data/assessment';

const initialState: AssessmentState = {
  currentSectionIndex: 0,
  currentQuestionIndex: 0,
  answers: {},
};

type Action = 
  | { type: 'ANSWER_QUESTION'; payload: { questionKey: string; value: number } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' };

const AssessmentContext = createContext<{
  state: AssessmentState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

function assessmentReducer(state: AssessmentState, action: Action): AssessmentState {
  switch (action.type) {
    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionKey]: action.payload.value,
        },
      };
    case 'NEXT_QUESTION': {
      const currentSection = assessmentData[state.currentSectionIndex];
      const questionsInSection = currentSection.questions.length;

      // If there are more questions in the current section
      if (state.currentQuestionIndex < questionsInSection - 1) {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
        };
      }

      // If there are more sections
      if (state.currentSectionIndex < assessmentData.length - 1) {
        return {
          ...state,
          currentSectionIndex: state.currentSectionIndex + 1,
          currentQuestionIndex: 0,
        };
      }

      return state;
    }
    case 'PREVIOUS_QUESTION': {
      // If we can go back in the current section
      if (state.currentQuestionIndex > 0) {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex - 1,
        };
      }

      // If we can go back to the previous section
      if (state.currentSectionIndex > 0) {
        const previousSection = assessmentData[state.currentSectionIndex - 1];
        return {
          ...state,
          currentSectionIndex: state.currentSectionIndex - 1,
          currentQuestionIndex: previousSection.questions.length - 1,
        };
      }

      return state;
    }
    default:
      return state;
  }
}

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);

  return (
    <AssessmentContext.Provider value={{ state, dispatch }}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}