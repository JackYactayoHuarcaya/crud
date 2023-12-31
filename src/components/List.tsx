import { MouseEvent } from "react";

type props = {
  arregloList: string[];
  delELement: (i: number) => void;
  clickUpdate: (e: MouseEvent) => void;
};

const List = ({ arregloList, delELement, clickUpdate }: props) => {
  return (
    <>
      <div className="flex justify-center mt-2">
        <ul
          className=" flex 
        flex-col justify-start gap-1"
        >
          {arregloList.map((e, i) => (
            <li
              key={i}
              className="
               rounded
            text-slate-800 p-1 text-center"
            >
              <div className="flex gap-1">
                <div className="flex w-60 justify-center bg-slate-300">
                  <p className="">{e}</p>
                </div>
                <div className=" flex justify-center items-center gap-1">
                  <span
                    onClick={() => delELement(i)}
                    className="bg-red-500 cursor-default rounded inline p-1 text-white"
                  >
                    eliminar
                  </span>
                  <span
                    data-id={i}
                    onClick={(e) => clickUpdate(e)}
                    className="bg-green-500 cursor-default rounded inline p-1 text-white"
                  >
                    actualizar
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;
