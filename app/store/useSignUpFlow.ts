import { create } from "zustand";

interface SignUpFlow {
  step: "step-one" | "step-two";
  setStep: (step: SignUpFlow["step"]) => void;
}

export const useSignUpFlow = create<SignUpFlow>((set) => {
  return {
    step: "step-one",
    setStep: (step) => set({ step }),
  };
});
