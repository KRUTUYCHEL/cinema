import React, {useEffect, useState} from "react";
import classNames from "classnames";

export interface Selected {
  row: number;
  column: number;
  vip: boolean;
}

interface Cell {
  disabled: boolean;
  vip: boolean;
  taken: boolean;
}
interface Row {
  cells: Cell[];
}

export interface HallPlacesProps {
  value: Selected[];
  onUpdate: (value: Selected[], html: string) => void;
  html: string;
}



const HallPlaces = ({ html, value, onUpdate }: HallPlacesProps) => {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    const hall = document.getElementById('hall-places');
    if (!hall) throw new Error('hall not found');
    console.log(hall);
    // @ts-ignore
    const rows = [...hall.querySelectorAll('.conf-step__row')];
    const result: Row[] = [];
    rows.forEach(rowDom => {
      const cells: Cell[] = [];
      result.push({ cells });

      const cellsDom = [...rowDom.querySelectorAll('.conf-step__chair')];
      cellsDom.forEach(cellDom => {
        const cell: Cell = {
          disabled: cellDom.classList.contains('conf-step__chair_disabled'),
          vip: cellDom.classList.contains('conf-step__chair_vip'),
          taken: cellDom.classList.contains('conf-step__chair_taken')
        };
        cells.push(cell);
      });
    });

    setRows(result);
  }, []);
  return (
    <>
      <div
        id="hall-places"
        style={{ display: 'none' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div>
        {rows.map((row, rowIndex) => (
          <div className="conf-step__row">
            {row.cells.map((cell, cellIndex) => {
              const selected = value.some(p => p.row === rowIndex + 1 && p.column === cellIndex + 1);
              return (
                <span
                  onClick={() => {
                    if (cell.disabled || cell.taken) return;

                    let newValue = [...value];
                    if (selected) {
                      newValue = newValue.filter(p => !(p.row === rowIndex + 1 && p.column === cellIndex + 1));
                    } else {
                      newValue.push({ row: rowIndex + 1, column: cellIndex + 1, vip: cell.vip });
                    }

                    onUpdate(newValue, '');
                  }}
                  className={classNames('conf-step__chair', {
                    'conf-step__chair_disabled': cell.disabled,
                    'conf-step__chair_standart': !cell.disabled && !cell.taken && !selected && !cell.vip,
                    'conf-step__chair_vip': !cell.disabled && !cell.taken && !selected && cell.vip,
                    'conf-step__chair_taken': !cell.disabled && cell.taken,
                    'conf-step__chair_selected': !cell.disabled && selected
                  })}
                />
              );
            })}
          </div>
        ))}
      </div>
    </>
  )
}

export default HallPlaces;