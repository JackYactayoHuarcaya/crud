import { HooksArray } from "../helpers/HooksArray";
import List from "./List";

const Form = () => {
  const {
    val,
    arreglo,
    changeInputVal,
    submitForm,
    delList,
    clickUpdate,
    cancelUpdate,
    updt,
  } = HooksArray();

  return (
    <>
      <div className="flex justify-center ">
        <form onSubmit={submitForm} className="flex flex-col gap-2">
          <input
            type="text"
            value={val}
            onChange={changeInputVal}
            className="rounded p-1 focus:outline-none 
            focus:shadow-md focus:shadow-slate-800"
          />
          <div className="flex gap-1">
            <div className="flex justify-start">
              <input
                type="submit"
                className="bg-slate-700 
            p-1 rounded hover:bg-slate-600"
              />
            </div>
            <div className="flex justify-start">
              {updt ? (
                <button
                  type="submit"
                  className="bg-blue-700 
            p-1 rounded hover:bg-blue-600"
                  onClick={cancelUpdate}
                >
                  Cancelar
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
      </div>
      <List
        arregloList={arreglo}
        delELement={delList}
        clickUpdate={clickUpdate}
      />
    </>
  );
};
export default Form;
