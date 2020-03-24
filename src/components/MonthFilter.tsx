import { MenuItem, Select } from '@material-ui/core';
import { endOfMonth, formatISO, getMonth } from 'date-fns';
import { enGB } from 'date-fns/locale';
import React, { useCallback, useMemo } from 'react';

const range = (n: number) => [...Array(n).keys()];

const months = range(12).map((i) => {
  return {
    value: i,
    label: (enGB as any).localize.month(i) as string,
  };
});

export interface DateRange {
  from: string;
  to: string;
}

type Props = StandardProps & {
  value: DateRange;
  onChange: (dateRange: DateRange) => void;
};

export const MonthFilterInline: React.FC<Props> = ({ value, onChange }) => {
  const currentMonthIndex = useMemo(() => {
    return getMonth(new Date(value.from));
  }, [value]);

  const handleChange = useCallback(
    (event) => {
      const monthIndex = event.target.value as number;
      const monthStart = new Date(2016, monthIndex, 1);

      onChange({
        from: formatISO(monthStart, { representation: 'date' }),
        to: formatISO(endOfMonth(monthStart), { representation: 'date' }),
      });
    },
    [onChange]
  );

  return (
    <Select value={currentMonthIndex} onChange={handleChange}>
      {months.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};
