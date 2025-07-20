import { useState, useEffect } from 'react';

interface UseYearsProps {
  year: number;
}

const useYears = ({ year }: UseYearsProps) => {
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsUntilCurrent = [];

    for (let i = year; i <= currentYear; i++) {
      yearsUntilCurrent.push(i);
    }

    setYears(yearsUntilCurrent.sort((a,b) => b - a));
  }, [year]);

  return years;
};

export default useYears;