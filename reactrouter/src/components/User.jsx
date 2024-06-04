import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className=" bg-slate-400 text-center p-4 text-lg font-bold ">
      User: {id}
    </div>
  );
}

export default User;
