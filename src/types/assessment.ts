export interface Option {
  value: number;
  text: string;
}

export interface Question {
  id: number;
  title: string;
  description: string;
  text: string;
  options: Option[];
}

export interface Section {
  title: string;
  questions: Question[];
}

export interface AssessmentState {
  currentSectionIndex: number;
  currentQuestionIndex: number;
  answers: Record<string, number>; // Format: "questionId": selectedValue
}