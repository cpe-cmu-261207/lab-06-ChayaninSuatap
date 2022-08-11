import { IconMailForward, IconMapPins } from "@tabler/icons";

export default function UserCardDetail({ address, email }) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {email}
      </p>
      <p>
        <IconMapPins /> {address}
      </p>
    </div>
  );
}
