import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/vaidik24")
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   }, []);

  return (
    <div className=" flex  flex-wrap items-center justify-center bg-gradient-to-r">
      <div className=" m-4">
        <img className=" max-w-48 rounded-full  cover" src={data.avatar_url} />
      </div>
      <div className="  ">Github Followers :{data.followers}</div>
    </div>
  );
}

export default Github;
