// Tipando na cara dura porque `DateTimeFormatOptions.month` não é exportado de `Intl`
const validValuesMonth = ['long', 'numeric', '2-digit', 'short', 'narrow', undefined] as const;

type MonthType = typeof validValuesMonth[number];

export const isMonthType = (candidate: any): candidate is MonthType => validValuesMonth.includes(candidate);

export const formatDate = (
  date: Date,
  monthType: MonthType,
  selectedLanguage: string = 'pt-BR',
  ): string => {
  const dateFormatter = new Intl.DateTimeFormat(selectedLanguage, {
    day: 'numeric',
    month: monthType, // Esse é o vigarista (`Intl.DateTimeFormatOptions.month`)
    year: 'numeric',
  });

  return dateFormatter.format(date);
}