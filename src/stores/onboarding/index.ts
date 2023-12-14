import useHydrated from "@trex/hooks/useHydrated";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OnboardingState {
  onboarding: boolean;
  setOnboarding: () => void;
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set, get) => ({
      onboarding: false,
      setOnboarding: () => {
        set({ onboarding: !get().onboarding });
      },
    }),
    {
      name: "onboarding",
    }
  )
);

const useOnBoarding: () => OnboardingState = () => {
  const store = useOnboardingStore();
  const isHydrated = useHydrated();
  return isHydrated
    ? store
    : {
        onboarding: false,
        setOnboarding: () => null,
      };
};

export default useOnBoarding;
