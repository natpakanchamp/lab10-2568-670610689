import { BsMailbox2, BsFillPinMapFill } from "react-icons/bs";

type UserCardDetail = {
  email: string;
  address: string;
};

export const UserCardDetail = ({ email, address }: UserCardDetail) => {
  return (
    <div className="text-center">
      <p>
        <BsMailbox2 /> {email}
      </p>
      <p>
        <BsFillPinMapFill /> {address}
      </p>
    </div>
  );
};
