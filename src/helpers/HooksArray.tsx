import React, { ChangeEvent, FormEvent, useState } from "react";

type update = {
  ok: boolean;
  id: number;
};

export const HooksArray = () => {
  const [arreglo, setArreglo] = useState<string[]>([]);
  const [val, setVal] = useState("");
  const [update, setUpdate] = useState<update>({ ok: false, id: 0 });

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    !update.ok ? setArreglo((v) => [...v, val]) : updateList(update.id, val);
    setVal("");
  };
  const changeInputVal = (e: ChangeEvent) => {
    const inputValue = e.target as HTMLInputElement;
    const val = inputValue.value;
    setVal(val);
  };

  const delList = (id: number) => {
    const newArreglo = arreglo.filter((e, i) => {
      if (i !== id) {
        return e;
      }
    });
    setArreglo(newArreglo);
  };

  const updateList = (id: number, text: string) => {
    const copyArreglo = arreglo.map((e) => {
      return e;
    });
    copyArreglo[id] = text;
    setArreglo(copyArreglo);
  };

  const clickUpdate = (e: React.MouseEvent) => {
    const val = e.target as HTMLElement;
    const text = val.parentNode?.parentNode?.children[0].children[0];
    if (text?.textContent) {
      setVal(text?.textContent);
    }
    if (val.dataset.id) {
      setUpdate({ id: parseInt(val.dataset.id), ok: true });
    }
  };

  return {
    arreglo,
    submitForm,
    changeInputVal,
    val,
    delList,
    updateList,
    clickUpdate,
  };
};
