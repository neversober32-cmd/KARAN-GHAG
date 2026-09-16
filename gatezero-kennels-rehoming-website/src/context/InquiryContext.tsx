import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import InquiryModal from "../components/InquiryModal";

const InquiryContext = createContext<(dog: string) => void>(() => {});

export const useInquiry = () => useContext(InquiryContext);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [dog, setDog] = useState<string | null>(null);
  const openModal = useCallback((name: string) => setDog(name), []);
  const closeModal = useCallback(() => setDog(null), []);

  return (
    <InquiryContext.Provider value={openModal}>
      {children}
      <InquiryModal dog={dog} onClose={closeModal} />
    </InquiryContext.Provider>
  );
}
