import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./Types";




export function useSectionInVIew(sectionName:SectionName, threshold=0.5){
    const { ref, inView } = useInView({
        threshold,
      });
      const { setActiveSection, timeLastClick } = useActiveSectionContext();
    
      useEffect(() => {
        if (inView && Date.now() - timeLastClick > 1000) {
          setActiveSection(sectionName);
        }
      }, [inView, setActiveSection, timeLastClick, sectionName]);

      return {
        ref,
      }
}