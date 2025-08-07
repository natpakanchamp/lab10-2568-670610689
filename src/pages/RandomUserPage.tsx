import { UserCard } from "../components/UserCard";
import { cleanUser } from "../libs/CleanUser";
import axios from "axios";
import { useEffect, useState } from "react";

const local_key = "random_user_amount";

export default function RandomUserPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  //const [genAmount, setGenAmount] = useState(1);

  const [genAmount, setGenAmount] = useState(()=> {
    const saved = localStorage.getItem(local_key);
    return saved ? Number(saved) : 1;
  })

  useEffect(()=> { // save ค่าลง localStorage
    localStorage.setItem(local_key, String(genAmount));
  }, [genAmount]);

  const generateBtnOnClick = async () => {
    setIsLoading(true);
    const resp = await axios.get(
      `https://randomuser.me/api/?results=${genAmount}`
    );
    const users = resp.data.results;
    const cleanUsers = users.map(cleanUser);
    console.log(cleanUsers);
    setUsers(cleanUsers);
    setIsLoading(false);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      <p className="display-4 text-center fst-italic m-4">Users Generator</p>
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event: any) => setGenAmount(Number(event.target.value))}
          value={genAmount}
        />
        <button className="btn btn-dark" onClick={generateBtnOnClick}>
          Generate
        </button>
      </div>
      {isLoading && (
        <p className="display-6 text-center fst-italic my-4">Loading ...</p>
      )}
      
      {users.length > 0 &&
        users.map((user, idx) => (
          <UserCard
            key={idx}
            name={user.name}
            imgUrl={user.imgUrl}
            address={user.address}
            email={user.email}
        />
      ))
    }
    </div>
  );
}
